var Dexie = require('dexie');


const loadIndex = function loadIndex() {



new Dexie('albums').open().then(function(db){
	return db.table('albums').toArray();
}).then(function(albums){
  var main = document.getElementById('mainContainer');
  var myTemplates = require('./indexedDBHTML.hbs');
	
  main.innerHTML = myTemplates(albums);
  require('./dropArrow.js');
}).catch(function(err){
	console.log(err); 
})


};


module.exports = loadIndex; 