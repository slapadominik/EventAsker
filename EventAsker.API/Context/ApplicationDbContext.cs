using EventAsker.API.Model;
using Microsoft.EntityFrameworkCore;

namespace EventAsker.API.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){}

        //enable lazy loading
        public virtual DbSet<Event> Events {get; set;}
        public virtual DbSet<City> Cities {get; set;}
        public virtual DbSet<Admin> Admins {get; set;}
        
    }
}