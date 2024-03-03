using Microsoft.AspNetCore.Mvc;
using TranslationProject.Models;
using ClosedXML.Excel;
using System.Text.Json;
using TranslationProject.Repository;

[Route("[controller]")]
[ApiController]
public class ApplicationsController : ControllerBase
{
    private readonly IApplicationRepository _repository;

    public ApplicationsController(IApplicationRepository repository)
    {
        _repository = repository;
    }

    // Existing methods...

[HttpGet("{id}/download")]
public async Task<IActionResult> DownloadTranslations(int id)
{
    var translations = await _repository.GetTranslationsByApplicationIdAsync(id);

    using var workbook = new XLWorkbook();
    var worksheet = workbook.Worksheets.Add("Translations");

    // Define the header row
    worksheet.Cell(1, 1).Value = "Key";
    worksheet.Cell(1, 2).Value = "Language";
    worksheet.Cell(1, 3).Value = "Translation";
    
    int currentRow = 2; // Start from the second row to leave the first row for headers
    foreach (var translation in translations)
    {
        foreach (var value in translation.Values)
        {
            string language = value.Key;
            string translationText = value.Value;

            worksheet.Cell(currentRow, 1).Value = translation.Key;
            worksheet.Cell(currentRow, 2).Value = language;
            worksheet.Cell(currentRow, 3).Value = translationText;
            currentRow++;
        }
    }

    using var stream = new MemoryStream();
    workbook.SaveAs(stream);
    var content = stream.ToArray();

    return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "translations.xlsx");
}



[HttpPost("{id}/deploy")]
public async Task<IActionResult> DeployTranslations(int id)
{
    var translations = await _repository.GetTranslationsByApplicationIdAsync(id);

    var json = JsonSerializer.Serialize(translations, new JsonSerializerOptions { WriteIndented = true });

    // Define the directory and file path
    var directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "translator");
    Directory.CreateDirectory(directoryPath); // Ensure the directory exists

    var filePath = Path.Combine(directoryPath, $"app{id}.json");
    await System.IO.File.WriteAllTextAsync(filePath, json);

    return Ok($"Translations deployed to {filePath}");
}


    [HttpGet]
    public async Task<ActionResult<IEnumerable<Application>>> GetApplications()
    {
        var applications = await _repository.GetAllApplicationsAsync();
        return Ok(applications);
    }

 [HttpPost]
public async Task<ActionResult<Application>> AddApplication([FromBody] Application newApp)
{
    // Assuming AddApplicationAsync now accepts an Application object
    var application = await _repository.AddApplicationAsync(newApp);
    return CreatedAtAction(nameof(GetApplications), new { id = application.Id }, application);
}

    [HttpPost("{appId}/translations")]
    public async Task<IActionResult> AddTranslationToApplication(int appId, [FromBody] Translation translation)
    {
        try
        {
            var updatedApp = await _repository.AddTranslationToApplicationAsync(appId, translation);
            if (updatedApp == null)
            {
                return NotFound($"Application with ID {appId} not found.");
            }
            return Ok(updatedApp);
        }
        catch (Exception ex)
        {
            // Log the exception if necessary
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
    [HttpPut("{appId}/translations/{key}")]
    public async Task<IActionResult> UpdateTranslation(int appId, string key, [FromBody] Translation translationUpdate)
    {
        try
        {
            var updatedApp = await _repository.UpdateTranslationAsync(appId, key, translationUpdate);
            if (updatedApp == null)
            {
                return NotFound($"Application with ID {appId} not found or translation key '{key}' does not exist.");
            }
            return Ok(updatedApp);
        }
        catch (Exception ex)
        {
            // Log the exception if necessary
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
}

}
