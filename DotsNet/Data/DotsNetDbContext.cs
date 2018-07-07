using DotsNet.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotsNet.Data
{
    public class DotsNetDbContext : DbContext
    {
        public DotsNetDbContext(DbContextOptions<DotsNetDbContext> options):base(options){ }

        public DbSet<Tag> Tags { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostTag> PostTags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PostTag>()
                .HasKey(t => new {t.PostID,t.TagID });

            modelBuilder.Entity<PostTag>()
                .HasOne(pt => pt.Post)
                .WithMany(p => p.PostTags)
                .HasForeignKey(pt => pt.PostID).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<PostTag>()
                .HasOne(pt => pt.Tag)
                .WithMany(t => t.PostTags)
                .HasForeignKey(pt => pt.TagID).OnDelete(DeleteBehavior.Restrict);
                
            base.OnModelCreating(modelBuilder);
        }
    }
}
