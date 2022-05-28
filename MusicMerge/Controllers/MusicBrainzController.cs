using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicMerge.Data;
using MetaBrainz.MusicBrainz;
using MetaBrainz.MusicBrainz.Interfaces.Searches;

namespace MusicMerge
{
    public class Release
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
    }


    [Route("api/[controller]")]
    [ApiController]
    public class MusicBrainzController : ControllerBase
    {
        private readonly MusicMergeContext _context;

        public MusicBrainzController(MusicMergeContext context)
        {
            _context = context;
        }


        [HttpGet("{artist}")]
        public IEnumerable<Release> GetAlbumsByArtist(string artist) // IEnumerable<Album>
        {
            var q = new Query();
            var artistList = q.FindArtists(artist);
            var artistEntry = artistList.Results.First().Item;

            var name = artistEntry.Name;
            var id = artistEntry.Id;

            var artist1 = q.LookupArtist(id, Include.Releases);

            var releases = artist1.Releases.Select(release => new Release() { Id = release.Id, Name = release.Title });

            return releases;
        }

        private bool AlbumExists(int id)
        {
            return (_context.Albums?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
