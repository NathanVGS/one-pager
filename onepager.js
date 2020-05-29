let visitors_counter = document.getElementById('Visitors').innerText;
let volunteers_counter = document.getElementById('Volunteers').innerText;

setTimeout(function() {
    odometer.innerText = parseInt(visitors_counter);
  }, 200);

let test = document.getElementsByClassName("carousel-control-next");
test[0].addEventListener("click", function(){
    clearInterval(myVar);
});