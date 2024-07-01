const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.getElementById("close");

const cross = document.getElementById("cart-cross")

if(bar){
  bar.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}

if(close){
  close.addEventListener('click', ()=>{
    nav.classList.remove('active');
  })
}







