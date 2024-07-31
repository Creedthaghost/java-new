
var randomNumber1 = Math.random()*6;
var randomNumber1 =  Math.floor(Math.random() * 6) + 1;


var images = document.querySelectorAll("img")[0];
images.setAttribute("src", `images/dice${randomNumber1}.png`);

var randomNumber2 = Math.random()*6;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

var images = document.querySelectorAll("img")[1];
images.setAttribute("src", `images/dice${randomNumber2}.png`);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
} 
else{
    document.querySelector("h1").innerHTML="Draw!"
};
