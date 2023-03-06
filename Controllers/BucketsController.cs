using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.S3;



namespace V2_Crud.Controllers
{

    [route("api/buckets")]
    [ApiController]
    public class BucketsController : ControllerBase
    {
        private readonly IAmazonS3 _s3Client;
        public BucketsController(IAmazonS3 s3Client)
        {
            _s3Client = s3Client;
        }
        
    }

    [HttpPost("create")]
    public async Task<IAsyncResult> CreateBucketAsync(string bucketName)
    {
        var bucketExists = await _s3Client....
    }
}