namespace DotsNet.Models
{
    public class PostTag
    {
        public string PostID { get; set; }
        public Post Post { get; set; }

        public string TagID { get; set; }
        public Tag Tag { get; set; }
    }
}