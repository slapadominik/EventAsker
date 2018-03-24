using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EventAsker.API.Migrations
{
    public partial class AddedQuestionLectureLecturer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateTable(
                name: "Lecture",
                columns: table => new
                {
                    LectureId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: false),
                    EndTime = table.Column<DateTime>(nullable: false),
                    EventId = table.Column<int>(nullable: false),
                    LecturerId = table.Column<int>(nullable: false),
                    StartTime = table.Column<DateTime>(nullable: false),
                    Topic = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lecture", x => x.LectureId);
                    table.ForeignKey(
                        name: "FK_Lecture_Events_EventId",
                        column: x => x.EventId,
                        principalTable: "Events",
                        principalColumn: "EventId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Lecture_Lecturer_LecturerId",
                        column: x => x.LecturerId,
                        principalTable: "Lecturer",
                        principalColumn: "LecturerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Question",
                columns: table => new
                {
                    QuestionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    EventId = table.Column<int>(nullable: false),
                    LecturerId = table.Column<int>(nullable: false),
                    QuestionContent = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Question", x => x.QuestionId);
                    table.ForeignKey(
                        name: "FK_Question_Events_EventId",
                        column: x => x.EventId,
                        principalTable: "Events",
                        principalColumn: "EventId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Question_Lecturer_LecturerId",
                        column: x => x.LecturerId,
                        principalTable: "Lecturer",
                        principalColumn: "LecturerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Lecture_EventId",
                table: "Lecture",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_Lecture_LecturerId",
                table: "Lecture",
                column: "LecturerId");

            migrationBuilder.CreateIndex(
                name: "IX_Question_EventId",
                table: "Question",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_Question_LecturerId",
                table: "Question",
                column: "LecturerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lecture");

            migrationBuilder.DropTable(
                name: "Question");

            migrationBuilder.DropTable(
                name: "Lecturer");
        }
    }
}
