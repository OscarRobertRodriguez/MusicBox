var Dexie = require('dexie');
var dropArrow = require('./dropArrow.js');
var eraseCookie = require('./eraseCookie.js');
const loadGenre = function loadGenre(type) {



new Dexie(type).open().then(function(db){
	return db.table('genre').toArray();
}).then(function(albums){
  var main = document.getElementById('mainContainer');
  var myTemplates = require('./indexedDBHTML.hbs');
   document.cookie = type + '=active';
   eraseCookie(type); 
  main.innerHTML = myTemplates(albums);
  dropArrow();
}).catch(function(err){
	console.log(err); 
})


};


module.exports = loadGenre; 



