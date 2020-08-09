var randomNumber = Math.random();
randomNumber = Math.ceil(randomNumber * 6);
var img1 = "images\\dice" + randomNumber + ".png";


var randomNumber2 = Math.random();
randomNumber2 = Math.ceil(randomNumber2 * 6);
var img2 = "images\\dice" + randomNumber2 + ".png";


var d =document.querySelectorAll("img")[0].getAttribute("src");
 document.querySelectorAll("img")[0].setAttribute("src",img1)  ;
 document.querySelectorAll("img")[1].setAttribute("src",img2)  ;


if (randomNumber < randomNumber2) {
  var d = document.querySelector("h1").innerHTML  = "<em>Player 2 wins🎈</em>";
   console.log(d);
}else if (randomNumber > randomNumber2) {
  var d = document.querySelector("h1").innerHTML  = "<em>🎈Player 1 wins</em>";
   console.log(d);
}else{
  var d = document.querySelector("h1").innerHTML  = "<em>DRAW!!</em>";
   console.log(d);
}
