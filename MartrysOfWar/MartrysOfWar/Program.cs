using BL;
using BL.Services;
using DL;
using DL.Models;
using DL.Services;
using Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddScoped<IUserBL, UserBL>();
builder.Services.AddScoped<IUserDL, UserDL>();
builder.Services.AddScoped<IMemoryBL, MemoryBL>();
builder.Services.AddScoped<IMemoryDL, MemoryDL>();
builder.Services.AddScoped<IPictureBL, PictureBL>();
builder.Services.AddScoped<IPictureDL, PictureDL>();
builder.Services.AddScoped<ISoldierBL, SoldierBL>();
builder.Services.AddScoped<ISoldierDL, SoldierDL>();
builder.Services.AddScoped<IRecipyBL, RecipyBL>();
builder.Services.AddScoped<IRecipyDL, RecipyDL>();
builder.Services.AddScoped<ITehilimBL, TehilimBL>();
builder.Services.AddScoped<ITehilimDL, TehilimDL>();
builder.Services.AddScoped<IPreparationBL, PreparationBL>();
builder.Services.AddScoped<IPreparationDL, PreparationDL>();
builder.Services.AddScoped<IPersonalVolunteeringBL, PersonalVolunteeringBL>();
builder.Services.AddScoped<IPersonalVolunteeringDL, PersonalVolunteeringDL>();
builder.Services.AddScoped<IVolunteeringBL, VolunteeringBL>();
builder.Services.AddScoped<IVolunteeringDL, VolunteeringDL>();
builder.Services.AddScoped<IVolunteeringOptionBL, VolunteeringOptionBL>();
builder.Services.AddScoped<IVolunteeringOptionDL, VolunteeringOptionDL>();
builder.Services.AddScoped<IProductsToRecipeBL, ProductsToRecipeBL>();
builder.Services.AddScoped<IProductsToRecipeDL, ProductsToRecipeDL>();
builder.Services.AddScoped<IApiServiceBL, ApiServiceBL>();
builder.Services.AddScoped<IApiServiceDL, ApiServiceDL>();
builder.Services.AddHttpClient<ApiServiceBL>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddScoped<MartyrsofwarContext>();
builder.Services.AddAutoMapper(typeof(AutoMapping));

builder.Services.AddDbContext<MartyrsofwarContext>(options =>
options.UseSqlServer("Data Source=PF231P12;Initial Catalog=Martyrs of war;Integrated Security=True;Pooling=False"));

var app = builder.Build();

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
