
var Dexie = require('dexie');



const storeToDB = function storeToDB (data) {
    var db = new Dexie('pop');
    db.version(1).stores({
        genre: '&rank,artist,album,url',
    });

    data.forEach(function(item) {
        db.genre.add({ rank: +item['@attr'].rank, artist: item.artist.name, album: item.name, url: item.image[2]['#text']});
    }); 
     
    
  
};




module.exports = storeToDB;