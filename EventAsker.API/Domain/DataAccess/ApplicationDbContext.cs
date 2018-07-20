using EventAsker.API.Domain.Entity;
using Microsoft.EntityFrameworkCore;

namespace EventAsker.API.Domain.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){}

        //enable lazy loading
        public virtual DbSet<Event> Events {get; set;}
        public virtual DbSet<Admin> Admins {get; set;}
        public virtual DbSet<Question> Question {get; set;}
        public virtual DbSet<Lecture> Lecture { get; set; }    
    }
}