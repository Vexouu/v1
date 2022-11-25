let id = null;
let sIndex = 0;
let i =0

function showImage(n) {
   sIndex=n;
   displaySlide();
}


function myMove() {  
    displaySlide();
    id = setInterval(displaySlide, 5000);            
}


function displaySlide() {
    let i=0;
    let slide = document.getElementsByClassName("slide");

    if (sIndex >= slide.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slide.length - 1;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[sIndex].style.display = "block";
    
    sIndex++;
}


function IndexFacebookB(){
    let image = document.getElementById("facebook")
    if (i==0){
        image.src = "img/facebookB.png"
        i=1;
    }
    else{
        image.src = "img/facebook.png"
        i=0;
    }
}

function IndexDiscordB(){
    let image = document.getElementById("discord")
    if (i==0){
        image.src = "img/discordB.png"
        i=1;
    }
    else{
        image.src = "img/discord.png"
        i=0;
    }
}

function IndexInstaB(){
    let image = document.getElementById("insta")
    if (i==0){
        image.src = "img/instaB.png"
        i=1;
    }
    else{
        image.src = "img/insta.png"
        i=0;
    }
}

function IndexTwitterB(){
    let image = document.getElementById("twitter")
    if (i==0){
        image.src = "img/twitterB.png"
        i=1;
    }
    else{
        image.src = "img/twitter.png"
        i=0;
    }
}

function IndexTwitchB(){
    let image = document.getElementById("twitch")
    if (i==0){
        image.src = "img/twitchB.png"
        i=1;
    }
    else{
        image.src = "img/twitch.png"
        i=0;
    }
}


function FacebookB(){
    let image = document.getElementById("facebook")
    if (i==0){
        image.src = "../img/facebookB.png"
        i=1;
    }
    else{
        image.src = "../img/facebook.png"
        i=0;
    }
}

function DiscordB(){
    let image = document.getElementById("discord")
    if (i==0){
        image.src = "../img/discordB.png"
        i=1;
    }
    else{
        image.src = "../img/discord.png"
        i=0;
    }
}

function InstaB(){
    let image = document.getElementById("insta")
    if (i==0){
        image.src = "../img/instaB.png"
        i=1;
    }
    else{
        image.src = "../img/insta.png"
        i=0;
    }
}

function TwitterB(){
    let image = document.getElementById("twitter")
    if (i==0){
        image.src = "../img/twitterB.png"
        i=1;
    }
    else{
        image.src = "../img/twitter.png"
        i=0;
    }
}

function TwitchB(){
    let image = document.getElementById("twitch")
    if (i==0){
        image.src = "../img/twitchB.png"
        i=1;
    }
    else{
        image.src = "../img/twitch.png"
        i=0;
    }
}

function formulaire(){
    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let email = document.getElementById("email").value
    let tel = document.getElementById("tel").value
    let message = document.getElementById("message").value
    alerte("Nom: "+nom+"\n prenom: "+prenom)
}