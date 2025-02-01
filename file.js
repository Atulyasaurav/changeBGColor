const body = document.body;
const btn = document.querySelector(".button");
console.log(btn);


const id = setInterval(() => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red},${blue},${green})`;
    body.style.background = rgb;
    
},000);

btn.addEventListener("click",()=>{
    clearInterval(id);
    btn.textContent = body.style.background;
});