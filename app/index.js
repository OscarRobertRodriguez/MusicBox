
const myTemplate = require('./handleTest.hbs');
import './main.scss';
var getCookie = require('./getCookie.js');
var setCookie = require('./setCookie.js');
var storeToDB = require('./storeToIndexedDb.js');
var loadIndex = require('./loadIndex.js');


loadAlbums();



function loadAlbums () {
    
        
    var mycookie = getCookie('my_cookie'); 
    if(mycookie === null){   
        fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&limit=27&api_key=3f5a8b5b437653593a7c6e61e1277e6e&format=json')
            .then(  
                function(response) {  
                    if (response.status !== 200) {  
                        console.log('Looks like there was a problem. Status Code: ' +  
        response.status);  
                        return;  
                    }

                    // Examine the text in the response  
                    response.json().then(function(data) { 
                        
                        var main = document.getElementById('mainContainer');
          
                        
                        
                        main.innerHTML = myTemplate(data.albums);
                        require('./dropArrow.js');
                        setCookie();
                        storeToDB(data.albums.album); 
                    });  
                }  
            )  
            .catch(function(err) {  
                console.log('Fetch Error :-S', err);  
            });
    }
    else {
        
        
        loadIndex();
      
    }    
}
  


