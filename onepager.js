let visitors_counter = document.getElementById('Visitors').innerText;
//let volunteers_counter = document.getElementById('Volunteers').innerText;

setTimeout(function() {
    odometer.innerText = parseInt(visitors_counter);
  }, 200);

/*
  document.getElementById("summary").addEventListener("click", summary);
  function summary(){
    document.getElementById("summary").className = "btn btn-outline-primary btn-sm active";
    document.getElementById("practical").className = "btn btn-outline-primary btn-sm";
    document.getElementById("contact").className = "btn btn-outline-primary btn-sm";
  }

document.getElementById("practical").addEventListener("click", practical);
function practical(){
  document.getElementById("summary").className = "btn btn-outline-primary btn-sm";
  document.getElementById("practical").className = "btn btn-outline-primary btn-sm active";
  document.getElementById("contact").className = "btn btn-outline-primary btn-sm";
}

document.getElementById("contact").addEventListener("click", contact);
function contact(){
  document.getElementById("summary").className = "btn btn-outline-primary btn-sm";
  document.getElementById("practical").className = "btn btn-outline-primary btn-sm";
  document.getElementById("contact").className = "btn btn-outline-primary btn-sm active";
}*/
