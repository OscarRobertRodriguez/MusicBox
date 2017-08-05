
(function dropDownArrow () {

  var arrows = document.getElementsByClassName('arrow_img'); 
  var arrow = document.getElementById('arrow_1');

  // arrow.addEventListener('click', function (e) {
  // 	var arrow = e.target; 
  // 	var box = arrow.nextSibling.nextSibling; 

  // 	box.classList.toggle('card-show');
  // })
   for(var i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener('click', function (e) {
      	var arrow = e.target;
      	var parent = arrow.parentNode;  
      	var info_box = arrow.nextSibling.nextSibling; 
        
        arrow.classList.toggle('spin-arrow'); 
      	info_box.classList.toggle('card-show');
        parent.classList.toggle('card-background_color'); 
      	console.log(parent); 
      })
   }

}(window)); 