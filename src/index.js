//when the user points on the explore button on the homepage //
//it takes their name//
function promptName(){
  let name =  prompt("what is your name");
 let taste = document.getElementById("text");
 taste.innerHTML = `welcome ${name}, Taste the Raw Goodness of Africa`
 let Browse =document.getElementById("browse");
 Browse.innerHTML=`Welcome ${name},browse through the African Goodness`;
  
}

let product = document.getElementById("explore");
 product.addEventListener("mouseenter", promptName);

 //loading more images when i click
function loadmore(){
    let newimages = document.getElementById("new_images"); 
    newimages.style.display = "block";
    newimages.style.display = "flex";
    let Hide=document.getElementById("less");
    Hide.style.display="block";
    let reveal=document.getElementById("load");
    reveal.style.display="none";
}
 let loan= document.getElementById("load");
 loan.addEventListener("click", loadmore);


 function loadMore(){
  let newimage = document.getElementById("new_images"); 
  newimage.style.display = "none";
  let Hid=document.getElementById("less");
  Hid.style.display="none";
  let reveals=document.getElementById("load");
  reveals.style.display="block";
}
let Loan= document.getElementById("less");
Loan.addEventListener("click", loadMore);
 


 
function hame(){
alert(`https://th.bing.com/th/id/OIP.EE_SZFffZhqDrzbrV3C7vwHaEo?w=248&h=180&c=7&r=0&o=5&pid=1.7`)
} 

let eges=document.getElementById("vegetable");
eges.addEventListener("click",hame);

function Man(){
  alert(`https://th.bing.com/th/id/OIP.n7Icz73BqCt_ghKL41FE5gHaE8?rs=1&pid=ImgDetMain`)
  } 
  
  let site=document.getElementById("Spices");
  site.addEventListener("mouseenter",Man);