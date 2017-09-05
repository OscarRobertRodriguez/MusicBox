
import './main.scss';

const getCookie = require('./getCookie.js');
const setCookie = require('./setCookie.js');
const storeToDB = require('./storeToIndexedDb.js');
const loadGenre = require('./loadGenre.js');
const fetchAndStore = require('./fetchAndStore.js');
const fetchAndStoreAndDisplay = require('./fetchAndStoreAndDisplay.js');
const Dexie = require('dexie');
const dropArrow = require('./dropArrow.js');
const checkCookieAndDisplay = require('./checkCookieAndDisplay.js');


(function loadAlbums() {

    var mycookie = getCookie('my_cookie');
    if (mycookie === null) {

        setCookie();
        fetchAndStoreAndDisplay('pop');
        fetchAndStore('rock');
        fetchAndStore('rap');
        fetchAndStore('alternative');
        fetchAndStore('classical');
    } else {
        checkCookieAndDisplay();
    }
}());


var genres = document.querySelector('.genres');

genres.addEventListener('click', function(e) {
    var div = e.target;
    var link = e.target.textContent;

    var classical = document.getElementById('classical');
    var rock = document.getElementById('rock');
    var alternative = document.getElementById('alternative');
    var pop = document.getElementById('pop');
    var rap = document.getElementById('rap');



    if (link === 'classical') {
        loadGenre('classical');
        div.style.textDecoration = 'underline';
        rock.style.textDecoration = '' ;
        alternative.style.textDecoration = '';
        pop.style.textDecoration = '';
        rap.style.textDecoration = ''; 
    }
    if (link === 'rock') {
        loadGenre('rock');
        div.style.textDecoration = 'underline';
        classical.style.textDecoration = '' ;
        alternative.style.textDecoration = '';
        pop.style.textDecoration = '';
        rap.style.textDecoration = ''; 
    }
    if (link === 'rap') {
        loadGenre('rap');
        div.style.textDecoration = 'underline';
        rock.style.textDecoration = '' ;
        alternative.style.textDecoration = '';
        pop.style.textDecoration = '';
        classical.style.textDecoration = ''; 
    }
    if (link === 'pop') {
        loadGenre('pop');
        div.style.textDecoration = 'underline';
        rock.style.textDecoration = '' ;
        classical.style.textDecoration = '';
        alternative.style.textDecoration = '';
        rap.style.textDecoration = ''; 
    }
    if (link === 'alternative') {
        loadGenre('alternative');
        div.style.textDecoration = 'underline';
        rock.style.textDecoration = '' ;
        classical.style.textDecoration = '';
        pop.style.textDecoration = '';
        rap.style.textDecoration = ''; 
    }
})






