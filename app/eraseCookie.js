

const eraseCookie = function eraseCookie(type) {
	var keyValues = document.cookie.split(/; */); 
	for(var i = 0; i < keyValues.length; i++){
		var name = keyValues[i].substring(0, keyValues[i].indexOf('='));
		
		if(type !== name && name !== 'my_cookie'){
			document.cookie = name + '=; Max-Age=0';
		}
	}
}


module.exports = eraseCookie; 