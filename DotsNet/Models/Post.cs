using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotsNet.Models
{
    public class Post
    {
        public string PostID { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PostDate { get; set; }

        public List<PostTag> PostTags { get; set; }
    }
}
