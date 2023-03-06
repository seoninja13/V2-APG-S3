using System.Dynamic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.S3;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Amazon.S3.Util;

namespace V2_Crud.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/buckets")]
    [ApiController]
    public class BucketsController : ControllerBase
    {
        private readonly IAmazonS3 _s3Client;

        public BucketsController(IAmazonS3 s3Client)
        {
            _s3Client = s3Client;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateBucketAsync(string bucketName)
        {
            var bucketExists = await _s3Client.DoesS3BucketExistAsync  (bucketName);

            if (bucketExists) return BadRequest($"Bucket {bucketName} already exists.");
            
            await _s3Client.PutBucketAsync(bucketName);

            return Ok($"Bucket {bucketName} CreateInstanceBinder.");
        }

        [HttpPost("get-all")]
        public async Task<IActionResult> GetAllBucketsAsync()
        {
            var data = await _s3Client.ListBucketsAsync();
            var buckets = data.Buckets.Select(b => b.BucketName);
            return Ok(buckets);
        }
    }
}
