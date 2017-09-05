

var Dexie = require('dexie');


const fetchAndStore = function (genre) {
   fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=' + genre + '&limit=27&api_key=3f5a8b5b437653593a7c6e61e1277e6e&format=json')
   .then(function(response){
   	  if(response.status !== 200) {
   	  	console.log('Error staus code ' + resonse.status);
   	  }
      
      response.json().then(function(data){
      	
      	 var db = new Dexie(genre); 
      	 db.version(1).stores({
      	 	genre: '&rank,artist,album,url',  
      	 });
          
          data.albums.album.forEach(function(item){
          	 db.genre.add({ rank: +item['@attr'].rank, artist: item.artist.name, album: item.name, url: item.image[2]['#text']});
          })


      })
   })
}





module.exports = fetchAndStore; 