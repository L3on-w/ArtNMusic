using System.ComponentModel.DataAnnotations;

namespace MusicMerge
{
    public class Thumbnails
    {
        public string large { get; set; }
    }
    public class Image
    {
        public string image { get; set; }
        public Thumbnails thumbnails { get; set; }


    }
    public class AlbumArtResponse
    {
        public List<Image> images {  get; set; }

    }
}
