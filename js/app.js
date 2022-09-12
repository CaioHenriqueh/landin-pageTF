const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

function carrossel(){
    idx++

    if(idx >= img.length ){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 96}%)`;
}
setInterval(carrossel, 2000);