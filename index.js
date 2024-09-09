


const p = document.querySelector(".paragraph");   
const forma = document.querySelector("#email");
const bot = document.querySelector(".button"); 

bot.addEventListener("click", function(event
) {
    if(forma.value == "") {
     event.preventDefault(); 
        
        p.style.color = "red";  
    } else {
        console.log("hi"); 
    }
});
