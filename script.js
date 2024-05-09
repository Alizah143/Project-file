let body = document.querySelector("body");
let button = document.querySelector("button");
let colors = ["pink","red","purple"]

button.addEventListener("click",function(){
    let Indexcolors = parseInt(Math.random()*colors.length)
    body.style.backgroundColor= colors[Indexcolors]
})