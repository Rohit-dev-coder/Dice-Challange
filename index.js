
    var randomno1 = Math.random();
randomno1 = randomno1*6 +1;
randomno1 = Math.floor(randomno1);

var randomno2 = Math.random();
randomno2 = randomno2*6 +1;
randomno2 = Math.floor(randomno2);

var img1 = document.querySelector(".img1");
img1.setAttribute("src","images/dice"+randomno1+".png");

var img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src","images/dice"+randomno2+".png");

var h1 = document.getElementsByTagName("h1")[0];
if(randomno1 > randomno2)
    h1.innerHTML = "Player 1 Win";
else if(randomno1 < randomno2)
h1.innerHTML = "Player 2 Win";
else{
    h1.innerHTML = "Draw";
}