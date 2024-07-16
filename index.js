const characters = ["A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2",
     "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let lengthPassEl = document.getElementById("pass")
let lengthPass = 0
let btn1El = document.getElementById("btn-1")
let btn2El = document.getElementById("btn-2")

function getRandomCharacter(){
    let len = characters.length
    let pos = Math.floor(Math.random() * len)
    return characters[pos]
}
function newPassword(){
    let pass = ""
    for(let i = 0; i < lengthPass; i++){
        pass += getRandomCharacter()
    }
    return pass 
}
function generatePasswords(){
    let curr = lengthPassEl.value 

    if (curr == "" || curr < 6 || curr > 30){
        alert("Please, fill in the length of the password with a number between 6 and 30.")
    }
    else{
        lengthPass = curr 
        pass1El.textContent = newPassword()
        pass2El.textContent = newPassword()
    }
}

btn1El.onclick = function(){
    navigator.clipboard.writeText(pass1El.textContent)
}
btn2El.onclick = function(){    
    navigator.clipboard.writeText(pass2El.textContent)
}