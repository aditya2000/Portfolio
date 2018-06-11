function toggleFunc(x) {
  x.classList.toggle("change");
  requestAnimationFrame(drop);
  function drop() {
    var navVar = document.getElementById("navbar");
    if(navVar.className === "nav-class"){
      navVar.className = "hideClass";
    } else{
      navVar.className = "nav-class";
    }
  }
}
