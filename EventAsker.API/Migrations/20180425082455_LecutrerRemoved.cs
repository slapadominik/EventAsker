using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EventAsker.API.Migrations
{
    public partial class LecutrerRemoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lecture_Lecturer_LecturerId",
                table: "Lecture");

            migrationBuilder.DropForeignKey(
                name: "FK_Question_Lecturer_LecturerId",
                table: "Question");

            migrationBuilder.DropTable(
                name: "Lecturer");

            migrationBuilder.DropIndex(
                name: "IX_Question_LecturerId",
                table: "Question");

            migrationBuilder.DropIndex(
                name: "IX_Lecture_LecturerId",
                table: "Lecture");

            migrationBuilder.DropColumn(
                name: "LecturerId",
                table: "Question");

            migrationBuilder.DropColumn(
                name: "LecturerId",
                table: "Lecture");

            migrationBuilder.AddColumn<int>(
                name: "LectureId",
                table: "Question",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LecturerName",
                table: "Lecture",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Events",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Question_LectureId",
                table: "Question",
                column: "LectureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Question_Lecture_LectureId",
                table: "Question",
                column: "LectureId",
                principalTable: "Lecture",
                principalColumn: "LectureId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Question_Lecture_LectureId",
                table: "Question");

            migrationBuilder.DropIndex(
                name: "IX_Question_LectureId",
                table: "Question");

            migrationBuilder.DropColumn(
                name: "LectureId",
                table: "Question");

            migrationBuilder.DropColumn(
                name: "LecturerName",
                table: "Lecture");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Events");

            migrationBuilder.AddColumn<int>(
                name: "LecturerId",
                table: "Question",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LecturerId",
                table: "Lecture",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Lecturer",
                columns: table => new
                {
                    LecturerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Company = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: false),
                    LastName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lecturer", x => x.LecturerId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Question_LecturerId",
                table: "Question",
                column: "LecturerId");

            migrationBuilder.CreateIndex(
                name: "IX_Lecture_LecturerId",
                table: "Lecture",
                column: "LecturerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Lecture_Lecturer_LecturerId",
                table: "Lecture",
                column: "LecturerId",
                principalTable: "Lecturer",
                principalColumn: "LecturerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Question_Lecturer_LecturerId",
                table: "Question",
                column: "LecturerId",
                principalTable: "Lecturer",
                principalColumn: "LecturerId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
