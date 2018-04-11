﻿// <auto-generated />
using EventAsker.API.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace EventAsker.API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20180324093942_Admin_Model")]
    partial class Admin_Model
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EventAsker.API.Model.Admin", b =>
                {
                    b.Property<int>("AdminId")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired();

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired();

                    b.Property<string>("Username")
                        .IsRequired();

                    b.HasKey("AdminId");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("EventAsker.API.Model.City", b =>
                {
                    b.Property<int>("CityId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CityName")
                        .IsRequired();

                    b.HasKey("CityId");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("EventAsker.API.Model.Event", b =>
                {
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AudienceKey");

                    b.Property<int>("CityId");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Street")
                        .IsRequired();

                    b.HasKey("EventId");

                    b.HasIndex("CityId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("EventAsker.API.Model.Event", b =>
                {
                    b.HasOne("EventAsker.API.Model.City", "City")
                        .WithMany("Events")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}