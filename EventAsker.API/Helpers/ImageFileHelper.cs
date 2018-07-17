using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace EventAsker.API.Helpers
{
    public static class ImageFileHelper
    {
        public static IHostingEnvironment HostingEnvironment { get; set; }

        public static bool SaveFile(IFormFile file, out string imageFileName)
        {
            if (!(file.FileName.EndsWith(".jpg") || file.FileName.EndsWith(".png")))
            {
                imageFileName = "";
                return false;
            }
            imageFileName = Guid.NewGuid().ToString();
            imageFileName = AddFileExtension(imageFileName);
            string filePath = GetPath(imageFileName);
            file.CopyTo(new FileStream(filePath, FileMode.Create));
            return true;
        }

        private static string GetPath(string fileName)
        {
            string path = HostingEnvironment.WebRootPath + "\\upload\\";
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            return path + fileName;
        }

        private static string AddFileExtension(string fileName)
        {
            return fileName.EndsWith(".jpg") ? fileName + ".jpg" : fileName + ".png";
        }
    }
}
