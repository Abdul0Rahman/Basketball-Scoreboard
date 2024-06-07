let homescore = 0
let homescoreEl = document.getElementById("homescore-el")

let guestscore = 0
let guestscoreEl =  document.getElementById("guestscore-el")

function add1pointhome(){
   homescore += 1
     homescoreEl.textContent = homescore
}

function add2pointshome(){
    homescore += 2
    homescoreEl.textContent = homescore
}

function add3pointshome(){
    homescore += 3
    homescoreEl.textContent = homescore
}

function add1pointguest(){
    guestscore += 1
    guestscoreEl.textContent = guestscore
}

function add2pointsguest(){
    guestscore += 2
    guestscoreEl.textContent = guestscore
}

function add3pointsguest(){
    guestscore += 3
    guestscoreEl.textContent = guestscore
}
