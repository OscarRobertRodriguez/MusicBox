



const dropArrow = require('./dropArrow.js');
const Dexie = require('dexie');


const checkCookieAndDisplay = function checkCookieAndDisplay() {
    var keyValues = document.cookie.split(/; */);
    var values = ['pop', 'rock', 'alternative', 'rap', 'classical'];
    var cookieLives;
    for (var i = 0; i < keyValues.length; i++) {
        var name = keyValues[i].substring(0, keyValues[i].indexOf('='));

       cookieLives = values.filter(function(item) {
            if (name === item) {
                return item;
            }
        });
    

    }

    if(cookieLives !== null) {
        new Dexie(cookieLives.toString()).open().then(function(db) {
            return db.table('genre').toArray();
        }).then(function(albums) {
            var main = document.getElementById('mainContainer');
            var link = document.getElementById(cookieLives); 
            var myTemplates = require('./indexedDBHTML.hbs');
            link.style.textDecoration = 'underline';
            main.innerHTML = myTemplates(albums);
            dropArrow();
        }).catch(function(err) {
            console.log(err);
        })
    }


}


module.exports = checkCookieAndDisplay; 
