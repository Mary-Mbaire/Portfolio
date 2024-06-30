//Create sticky navbar onscroll
window.onscroll = function(){addClass()};
let navSticky = document.querySelector("#navbar")

//navbar offset position
let position = navSticky.offsetTop;

//function to when we scroll add class sticky to navbar
function addClass(){
    if(window.pageYOffset>= position){
        
        navSticky.classList.add("sticky")
    }
    else{
        navSticky.classList.remove("sticky")
    }
   
 }
  

