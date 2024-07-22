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
    let new_images = document.getElementById("new_images"); 
    new_images.style.display = "block";
    new_images.style.display = "flex";
    let Hide=document.getElementById("hide");
    Hide.style.display="flex";
    let reveal=document.getElementById("load");
    reveal.style.display="none";
}
 let load= document.getElementById("load");
 load.addEventListener("click", loadmore);



 
 