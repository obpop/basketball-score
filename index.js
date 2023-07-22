//score css
let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")
//Home
let pointBtn1 = document.getElementById("point-btn1")
let pointBtn2 = document.getElementById("point-btn2")
let pointBtn3 = document.getElementById("point-btn3")
//Guest
let pointBtn11 = document.getElementById("point-btn11")
let pointBtn22 = document.getElementById("point-btn22")
let pointBtn33 = document.getElementById("point-btn33")

//RESET 
let reset = document.getElementById("reset-btn")
reset.addEventListener("mousedown", resetMatch)

pointBtn1.addEventListener("mousedown", plusOneHome)
pointBtn2.addEventListener("mousedown", plusTwoHome)
pointBtn3.addEventListener("mousedown", plusThreeHome)

pointBtn11.addEventListener("mousedown", plusOneGuest)
pointBtn22.addEventListener("mousedown", plusTwoGuest)
pointBtn33.addEventListener("mousedown", plusThreeGuest)

//score count
let scoreCountHome = 0;
let scoreCountGuest = 0; 

//---------------Home---------------
function plusOneHome() {
    console.log("1 Home")
    scoreCountHome += 1
    homeScore.textContent = scoreCountHome
}

function plusTwoHome() {
    console.log("2 Home")
    scoreCountHome += 2
    homeScore.textContent = scoreCountHome
}

function plusThreeHome() {
    console.log("3 Home")
    scoreCountHome += 3
    homeScore.textContent = scoreCountHome
}

//--------------Guest---------------
function plusOneGuest() {
    console.log("1 Guest")
    scoreCountGuest += 1
    guestScore.textContent = scoreCountGuest
}

function plusTwoGuest() {
    console.log("2 Guest")
    scoreCountGuest += 1
    guestScore.textContent = scoreCountGuest
}

function plusThreeGuest() {
    console.log("3 Guest")
    scoreCountGuest += 1
    guestScore.textContent = scoreCountGuest
}

//RESET
function resetMatch() {
    console.log("RESET")
    homeScore.textContent = "0"
    guestScore.textContent = "0"
    scoreCountGuest = 0; 
    scoreCountHome = 0;
    
}