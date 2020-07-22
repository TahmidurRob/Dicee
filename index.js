var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var h1Text = "";

if(randomNumber1 > randomNumber2){
  h1Text = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
  h1Text = "Player 2 wins!";
}
else{
  h1Text = "Draw...";
}

document.querySelector(".container h1").textContent = h1Text;

document.querySelector(".img1").setAttribute("src", ("images/dice" + randomNumber1 + ".png"));
document.querySelector(".img2").setAttribute("src", ("images/dice" + randomNumber2 + ".png"));
