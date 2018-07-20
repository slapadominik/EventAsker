namespace EventAsker.API.Features.Security.Authentication.DTO
{
    public class CheckEventPasswordDto
    {
        public int EventId { get; set; }
        public string AudienceKey { get; set; }
    }
}
