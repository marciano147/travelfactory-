using System.Collections.Generic;
using TranslationProject.Models;

namespace TranslationProject.MockData
{

public static class MockData
{
    public static List<Translation> GetMockTranslations() => new List<Translation>
    {
        new Translation { Key = "Hello", Values = new Dictionary<string, string> { { "English", "hello" }, { "French", "bonjour" }, { "Dutch", "hallo" } } },
        new Translation { Key = "Goodbye", Values = new Dictionary<string, string> { { "English", "goodbye" }, { "French", "au revoir" }, { "Dutch", "tot ziens" } } },
        new Translation { Key = "Thank you", Values = new Dictionary<string, string> { { "English", "thank you" }, { "French", "merci" }, { "Dutch", "dank u" } } },
        new Translation { Key = "Welcome", Values = new Dictionary<string, string> { { "English", "welcome" }, { "French", "bienvenue" }, { "Dutch", "welkom" } } },
        new Translation { Key = "Yes", Values = new Dictionary<string, string> { { "English", "yes" }, { "French", "oui" }, { "Dutch", "ja" } } },
        new Translation { Key = "No", Values = new Dictionary<string, string> { { "English", "no" }, { "French", "non" }, { "Dutch", "nee" } } },
        new Translation { Key = "Please", Values = new Dictionary<string, string> { { "English", "please" }, { "French", "s'il vous plaît" }, { "Dutch", "alsjeblieft" } } },
        new Translation { Key = "Sorry", Values = new Dictionary<string, string> { { "English", "sorry" }, { "French", "désolé" }, { "Dutch", "sorry" } } },
        new Translation { Key = "Excuse me", Values = new Dictionary<string, string> { { "English", "excuse me" }, { "French", "excusez-moi" }, { "Dutch", "pardon" } } },

    };
        public static List<Application> GetMockApplications()
    {
        var translations = GetMockTranslations();
        return new List<Application>
        {
            new Application { Id = 1, Name = "Translator Pro", LastDeployment = "2024-02-20T14:45:00Z", Translations = translations },
            new Application { Id = 2, Name = "QuickTranslate", LastDeployment = "2024-02-19T09:30:00Z", Translations = translations },
            // Add the rest of the applications with LastDeployment as string
            new Application { Id = 3, Name = "LinguaWorld", LastDeployment = "2024-02-18T16:15:00Z", Translations = translations },
 
            new Application  { Id = 4, Name = "Polyglot Tools", LastDeployment = "2024-02-17T13:00:00Z", Translations = translations },
            new Application { Id = 5, Name = "GlobalSpeak", LastDeployment = "2024-02-16T11:45:00Z", Translations = translations },       
        };


        }
    
}
}