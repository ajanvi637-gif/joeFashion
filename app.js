const container = document.querySelector(".categories");

document.querySelector(".right").onclick = () =>{
container.scrollLeft += 300;
}

document.querySelector(".left").onclick = () =>{
container.scrollLeft -= 300;
}