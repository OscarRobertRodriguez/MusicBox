const dropDown = function  () {

    var arrows = document.getElementsByClassName('arrow_img'); 
  
    

    for(var i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function (e) {
            var arrow = e.target;
            var parent = arrow.parentNode;  
            var info_box = arrow.nextSibling.nextSibling; 
        
            arrow.classList.toggle('spin-arrow'); 
            info_box.classList.toggle('card-show');
            parent.classList.toggle('card-background_color'); 
             
        });
    }

};


module.exports = dropDown; 