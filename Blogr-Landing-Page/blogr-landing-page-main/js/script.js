/*-- Items Menu --*/
var element;
fun = (obj) => {
      element = obj;
      obj.parentElement.parentElement.children[1].classList.toggle("hidden");
    }
document.onclick = function(e) {
      if (e.target.tagName !== "BUTTON") {
            element.parentElement.parentElement.children[1].classList.add("hidden");
          }
    }

/*-- Main Menu --*/
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click",() => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})
