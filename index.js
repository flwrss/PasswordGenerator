let allChar = ["!","@","#","$","^","&","*","|","?",1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","v","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function getRandomChar(length){
    let generateRandomNum = Math.floor(Math.random()*71)
    return allChar[generateRandomNum]
}

function getInput(){
   let lengthEl = document.getElementById("input-el").value
   return lengthEl
}
let length = getInput()

function copy(){
    
}

let firstPasswordEL = document.querySelector("#firstpassword-el")
let secondPasswordEL = document.querySelector("#secondpassword-el")
let thirdPasswordEL = document.querySelector("#thirdpassword-el")
let fourthPasswordEL = document.querySelector("#fourthpassword-el")
function renderPasswords(){
    repeatGeneratingPasswords() 
}
function repeatGeneratingPasswords(){
    let singlePasswordArr = []
    let allPasswordsArr = []
    let genertedPassword = ""
    getRandomChar(length)
    
    for(j = 0 ; j< 4; j++){
    for(let i = 0 ; i < getInput() ; i++){
    genertedPassword += getRandomChar(i)
    }
    singlePasswordArr.push(genertedPassword)
    genertedPassword = ""
    allPasswordsArr.push(singlePasswordArr[j])
    }
    firstPasswordEL.setAttribute("value", allPasswordsArr[0] )
    secondPasswordEL.setAttribute("value", allPasswordsArr[1] )
    thirdPasswordEL.setAttribute("value", allPasswordsArr[2] )
    fourthPasswordEL.setAttribute("value", allPasswordsArr[3] )
    
}
function copy(){
    let copiedPassword = document.querySelector(".copy-el")
     navigator.clipboard.writeText(copiedPassword.value);
     alert("Copied to Clipboaed: " + copiedPassword.value)
 }