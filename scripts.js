//array of the diceimages
let images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

//or let imagesOne = "images/dice" + randomOne + ".png";
//   let imagesOne = "images/dice" + randomOne + ".png";

// random numbers for player 1 and 2
let randomOne = Math.floor(Math.random() * images.length);
let randomTwo = Math.floor(Math.random() * images.length);

//go into HTML and change the image
 document.querySelector(".img1").src =images[randomOne]; //and with another query
 document.querySelectorAll("img")[1].setAttribute("src", images[randomTwo]);

 //who won? compare player 1 and player to dice numbers
if (randomOne > randomTwo){
    document.querySelector("h1").innerHTML="Player 1 has Won!";
}else if(randomOne < randomTwo){
    document.querySelector("h1").innerHTML="Player 2 has Won!"
}else{
     document.querySelector("h1").innerHTML="Draw! 🏳️"
}

// who click Reset?>> will put dice images to 6 and H1 to default text.
function functionName(){
document.querySelector(".img1").src="images/dice6.png";
document.querySelector(".img2").src="images/dice6.png";
document.querySelector("h1").innerHTML="Refresh Me";
}

//Click Reset
document.querySelector('button').addEventListener("click",functionName);


