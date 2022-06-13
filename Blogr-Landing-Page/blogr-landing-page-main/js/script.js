/*-- Items Menu --*/
var element;
fun = (obj) => {
    element = obj;
    obj.parentElement.parentElement.children[1].classList.toggle("hidden");
    obj.nextElementSibling.classList.toggle("reverse");
    obj.nextElementSibling.classList.toggle("normal");
    obj.nextElementSibling.nextElementSibling.classList.toggle("reverse");
    obj.nextElementSibling.nextElementSibling.classList.toggle("normal");
}
document.onclick = function(e) {
    if (e.target.tagName !== "BUTTON") {
        element.parentElement.parentElement.children[1].classList.add("hidden");
        element.nextElementSibling.classList.remove("reverse");
        element.nextElementSibling.nextElementSibling.classList.remove("reverse");
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


