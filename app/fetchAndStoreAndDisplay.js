var Dexie = require('dexie');
var dropArrow = require('./dropArrow.js');


const fetchAndStoreAndDisplay = function fetchAndStoreAndDisplay(genre) {
    fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=' + genre + '&limit=15&api_key=3f5a8b5b437653593a7c6e61e1277e6e&format=json')
        .then(function(response) {
            if (response.status !== 200) {
                console.log('Error staus code ' + response.status);
            }

            response.json().then(function(data) {

                var db = new Dexie(genre);
                db.version(1).stores({
                    genre: '&rank,artist,album,url',
                });

                data.albums.album.forEach(function(item) {
                    db.genre.add({
                        rank: +item['@attr'].rank,
                        artist: item.artist.name,
                        album: item.name,
                        url: item.image[2]['#text']
                    });
                })


            }).then(function() {
                new Dexie('pop').open().then(function(db) {
                    return db.table('genre').toArray();
                }).then(function(albums) {
                    var main = document.getElementById('mainContainer');
                    var myTemplates = require('./indexedDBHTML.hbs');
                    document.cookie = 'pop=active';
                    main.innerHTML = myTemplates(albums);
                    dropArrow();
                }).catch(function(err) {
                    console.log(err);
                })

            })
        })
}

module.exports = fetchAndStoreAndDisplay;