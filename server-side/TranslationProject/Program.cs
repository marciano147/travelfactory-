using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using TranslationProject.Repository; // Assuming you have custom services like repositories

var builder = WebApplication.CreateBuilder(args);

// Add services to the DI container
builder.Services.AddSingleton<IApplicationRepository, ApplicationRepository>();

// Register services for controllers
builder.Services.AddControllers();

// Configure CORS to allow requests from your frontend application
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000") // Replace with the actual origin of your frontend app
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseHttpsRedirection();

app.UseCors(); // Apply CORS middleware

app.MapControllers(); // Map attribute-routed controllers

app.Run();
