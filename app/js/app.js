

(function spotThis() {
var spotifyApi = new SpotifyWebApi();
  
 

spotifyApi.getArtistAlbums('35348426f68a49fd8bfe5c2ed1052c03', function(err, data) {
  if (err) console.error(err);
  else console.log('Artist albums', data);
});

}()); 