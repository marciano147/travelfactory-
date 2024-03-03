namespace TranslationProject.Models
{

public class Application
{
    public int Id { get; set; }
    public  string? Name { get; set; }
    public  string? LastDeployment { get; set; }
    public List<Translation> Translations { get; set; } = new List<Translation>();
}

public class Translation
{
    public  string? Key { get; set; }
    public  Dictionary<string, string>? Values { get; set; } // Note: 'Values', not 'Value'
}
}


