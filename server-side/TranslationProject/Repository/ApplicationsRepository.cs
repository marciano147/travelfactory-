using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TranslationProject.Models;


namespace TranslationProject.Repository
{

        public interface IApplicationRepository
    {
        Task<Application> AddTranslationToApplicationAsync(int appId, Translation translation);
        Task<IEnumerable<Application>> GetAllApplicationsAsync();
        Task<Application> AddApplicationAsync(Application newApp);
        Task<IEnumerable<Translation>> GetTranslationsByApplicationIdAsync(int applicationId);
        Task<Application> UpdateTranslationAsync(int appId, string key, Translation translationUpdate);
    }
    public class ApplicationRepository : IApplicationRepository
    {
        private readonly List<Application> applications = new List<Application>();

        public ApplicationRepository()
        {
            // Add mock data to the list of applications
            applications.AddRange(MockData.MockData.GetMockApplications());
        }

        public async Task<Application?> AddTranslationToApplicationAsync(int appId, Translation translation)
        {
        var application = applications.FirstOrDefault(a => a.Id == appId);
        if (application == null)
        {
            
            return null;
        }

        application.Translations.Add(new Translation
        {
            Key = translation.Key,
            Values = translation.Values
        });


        return await Task.FromResult(application);
    }

        public async Task<IEnumerable<Application>> GetAllApplicationsAsync()
        {
            // Asynchronously return all applications
            return await Task.FromResult(applications);
        }

     public async Task<Application> AddApplicationAsync(Application newApp)
    {
        newApp.Id = applications.Count + 1; // Set the ID based on the count
        applications.Add(newApp); // Add the new application to the list
        return await Task.FromResult(newApp); // Return the newly added application
    }

        public async Task<IEnumerable<Translation>> GetTranslationsByApplicationIdAsync(int applicationId)
        {
            // Find the application by ID
            var application = applications.FirstOrDefault(app => app.Id == applicationId);

            // If the application exists, return its translations; otherwise, return an empty list
            return await Task.FromResult(application?.Translations ?? new List<Translation>());
        }

  public async Task<Application> UpdateTranslationAsync(int appId, string key, Translation translationUpdate)
{
    var application = applications.FirstOrDefault(a => a.Id == appId);
    if (application == null)
    {
        return null;
    }

    var translationIndex = application.Translations.FindIndex(t => t.Key == key);
    if (translationIndex == -1)
    {
        return null;
    }

    // Perform a deep copy of the translation values
    var newValues = new Dictionary<string, string>(translationUpdate.Values);

    // Create a completely new Translation object
    var newTranslation = new Translation
    {
        Key = key,
        Values = newValues
    };

    application.Translations[translationIndex] = newTranslation;

    return await Task.FromResult(application);
}


        
    }
}
