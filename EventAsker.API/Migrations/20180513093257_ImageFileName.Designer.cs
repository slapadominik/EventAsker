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
    [Migration("20180513093257_ImageFileName")]
    partial class ImageFileName
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

            modelBuilder.Entity("EventAsker.API.Model.Event", b =>
                {
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AudienceKey");

                    b.Property<string>("City");

                    b.Property<string>("Date")
                        .IsRequired();

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<string>("ImageFilename");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Street")
                        .IsRequired();

                    b.HasKey("EventId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("EventAsker.API.Model.Lecture", b =>
                {
                    b.Property<int>("LectureId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<DateTime>("EndTime");

                    b.Property<int>("EventId");

                    b.Property<string>("LecturerName")
                        .IsRequired();

                    b.Property<DateTime>("StartTime");

                    b.Property<string>("Topic")
                        .IsRequired();

                    b.HasKey("LectureId");

                    b.HasIndex("EventId");

                    b.ToTable("Lecture");
                });

            modelBuilder.Entity("EventAsker.API.Model.Question", b =>
                {
                    b.Property<int>("QuestionId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorName");

                    b.Property<string>("Email");

                    b.Property<int>("EventId");

                    b.Property<int?>("LectureId");

                    b.Property<string>("QuestionContent")
                        .IsRequired();

                    b.HasKey("QuestionId");

                    b.HasIndex("EventId");

                    b.HasIndex("LectureId");

                    b.ToTable("Question");
                });

            modelBuilder.Entity("EventAsker.API.Model.Lecture", b =>
                {
                    b.HasOne("EventAsker.API.Model.Event", "Event")
                        .WithMany("Lectures")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EventAsker.API.Model.Question", b =>
                {
                    b.HasOne("EventAsker.API.Model.Event", "Event")
                        .WithMany("Questions")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EventAsker.API.Model.Lecture", "Lecture")
                        .WithMany("Questions")
                        .HasForeignKey("LectureId");
                });
#pragma warning restore 612, 618
        }
    }
}
