using System.Collections.Generic;

namespace DotsNet.Models
{
    public class Tag
    {
        public string TagID{get;set;}
        public string Title { get; set; }

        public List<PostTag> PostTags { get; set; }
    }
}