
var Dexie = require('dexie');

var albumsData; 

const storeToDB = function storeToDB (data) {
    var db = new Dexie('albums');
    db.version(1).stores({
        albums: '&rank,artist,album,url',
    });

    data.forEach(function(item) {
        db.albums.add({ rank: +item['@attr'].rank, artist: item.artist.name, album: item.name, url: item.image[2]['#text']});
    }); 
     
    
  
};


// const storeToIndexedDB = function storeToIndexedDB(value) {
//     var store = {}, cart = [];  
//     for (var i = 0; i < value.length; i++) {
//         store.album =value[i].name;
//         store.artist =value[i].artist.name;
//         store.rank =value[i]['@attr'].rank; 
//         store.img = value[i].image[2]['#text'];
//         cart.push(store); 
//     }
//     return cart;
// };

module.exports = storeToDB;