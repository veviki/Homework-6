// when the user points on the explore button on the homepage 
//it takes their name
function promptName(){
  let name =  prompt("what is your name");
 let taste = document.querySelector(".taste");
 taste.innerHTML = `welcome ${name}, Taste the Raw Goodness of Africa`
  
}

let product = document.getElementById("explore");
 product.addEventListener("mouseenter", promptName);