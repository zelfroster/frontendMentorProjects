/* ============= Option Switch =============== */
var arr = document.getElementsByClassName("rate");

for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = e => {
        let n = 0;
        while (n < arr.length) {
            arr[n++].classList.remove("checked");
        }
        e.target.classList.add("checked");
    }
}
/* ============= Option Switch =============== */



/* ============= Rating =============== */
updateRating = () => {
    const val = document.querySelector(".checked");
    console.log(val);
    document.getElementById("rating").innerHTML = val.value;
    document.querySelector(".thankCard").style.display = "grid";
    document.querySelector(".rateCard").style.display = "none";
}
/* ============= Rating =============== */





/*
for(var i = 0; i < arr.length; i++) {
    arr[i].onclick = function(){
        var el = arr[0];
        while (el) {
            if(el.tagName === "BUTTON") {
                el.classList.remove("checked")
            }
            el = el.nextSibling;
        }
        this.classList.add("checked");
    }
}
*/
