##TRAVELFACTORY - Translator APPLICATION##


Sione's Notes :

 - I'm honest and I finished the excercise in 6 hours
 - I took breaks in between and had to go in the middle
 - Its being  along time I did C#
 - npm start for the front, and dotnet run for the server
 - React Notes: 
    - Editing existing translations create new translations - I can fix it later on just overtime.
    - Translations need key ID
    - MenuBar symbols need to change
    - Inline styling shouldnt be , is like that now since I didnt have time to implement properly
    - Theres more styling needed in the program for side bar 
    - Better to use a store for the apps and their translations
    - Theres a better way to implement routing for the appl page, but for now theres a loading 
      comment for milisecond.
    - Save All Button functionality not implemented
    
- C# Notes : 
    - I did not implement security like authorization and authenthication
    - I created an update translation fucntion for editing trasnlations but it edited all of the 
    trasnlations with the same key. I need to implemetn immutable data structures 
    - Didnt know if to fix the warnings and the implications of them so just left them
    - When downloading to a Json, there might be invalid characters that needs fixing

    Hope you enjoy.


Welcome to our test!

The goal of this test is to create an application for managing translations.

Please note, you are required to create a C# server (a database is optional). This test is full stack, involving front-end (HTML, CSS, JS) and back-end development.
Context
At TravelFactory, we have several applications, each requiring translations for its interface elements. We currently use JSON format files for translations, which is not practical for our business teams. Additionally, deploying translations to production requires developer intervention to verify and copy the files to the server.

To address this issue, the project manager and business teams have decided to create a centralized application for managing all interface translations. This application should allow users to input, download, and deploy translations for applications.

This application consists of two screens.

The first screen should:
Display a list of existing applications.
Allow users to add an application by entering its name in a popup.
Provide a "Download XLSX" button that downloads an Excel file containing all translations for the selected application.
Offer a "Deploy" button to save the translation in JSON format to a server directory named after the application, such as /translator/app1.json.
 ![Logo](
https://bytebucket.org/labtravelfactory/workspace/snippets/BzgzR5/raw/21436a2a880db2b97089e509c16e5dced95c1460/translatorScreen1.jpg)
 
### The Next screen allows you to: ###
- Add translation keys for a selected app.
![Logo](
https://bytebucket.org/labtravelfactory/workspace/snippets/BzgzR5/raw/5509bf0dc83a8308d022d8845ba243c075f2f3ee/translatorScreen2.jpg)
 
### You have 3 hours to complete this project. ###
 
### When the project is finished, please commit it to the Bitbucket account. ###
