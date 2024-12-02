using Microsoft.EntityFrameworkCore;
using TaskManagerApi.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Register ApplicationDbContext and other services
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add CORS policy before building the app
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowAll");  // Make sure to use the policy after building the app

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
