using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace V2_Crud.Models
{
    public class S3ObjectDto
    {
        public string? Name { get; set; }
        public string? PresignedUrl { get; set; }
    }
}