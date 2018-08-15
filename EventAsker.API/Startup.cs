using System;
using System.Text;
using AutoMapper;
using Elmah.Io.AspNetCore;
using EventAsker.API.Domain.Converters;
using EventAsker.API.Domain.Converters.Interfaces;
using EventAsker.API.Domain.DataAccess;
using EventAsker.API.Domain.Entity;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Event.Repositories;
using EventAsker.API.Features.Event.Repositories.Interfaces;
using EventAsker.API.Features.Event.Services;
using EventAsker.API.Features.Event.Services.Interfaces;
using EventAsker.API.Features.Lecture.Repositories;
using EventAsker.API.Features.Lecture.Repositories.Interfaces;
using EventAsker.API.Features.Lecture.Services;
using EventAsker.API.Features.Lecture.Services.Interfaces;
using EventAsker.API.Features.Question.Repositories;
using EventAsker.API.Features.Question.Repositories.Interfaces;
using EventAsker.API.Features.Question.Services;
using EventAsker.API.Features.Question.Services.Interfaces;
using EventAsker.API.Features.Security.Authentication.Repositories;
using EventAsker.API.Features.Security.Authentication.Repositories.Interfaces;
using EventAsker.API.Features.Security.Authentication.Services;
using EventAsker.API.Features.Security.Authentication.Services.Interfaces;
using EventAsker.API.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace EventAsker.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper();
            services.AddMvc();
            services.AddCors();
            services.AddDbContext<ApplicationDbContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("LocalDb")));
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddTransient<IEventService, EventService>();
            services.AddTransient<IEventRepository, EventRepository>();
            services.AddTransient<IQuestionRepository, QuestionRepository>();
            services.AddTransient<IQuestionService, QuestionService>();
            services.AddTransient<ILectureRepository, LectureRepository>();
            services.AddTransient<ILectureService, LectureService>();
            services.AddTransient<IConverter<Event, EventDto>, EventConverter>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => {
                    options.TokenValidationParameters = new TokenValidationParameters{
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = Configuration["Jwt:Issuer"],
                        ValidAudience = Configuration["Jwt:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
                    };
                });
            services.AddElmahIo(o =>
            {
                o.ApiKey = "f453fdd901ac4fb3a650aba9369f4e82";
                o.LogId = new Guid("f3a6ac55-b16e-41ca-8f45-ff08ca5cdee4");
            });
            services.Configure<ElmahIoOptions>(Configuration.GetSection("ElmahIo"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
            app.UseAuthentication();
            app.UseMvc();
            app.UseElmahIo();
            app.UseStaticFiles();

            ImageFileHelper.HostingEnvironment = env;
        }
    }
}
