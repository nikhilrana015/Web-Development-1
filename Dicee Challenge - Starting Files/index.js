var x=Math.floor(Math.random()*6)+1;
var images1="images/dice"+x+".png";
document.querySelector(".dice .img1").setAttribute("src",images1);
var y=Math.floor(Math.random()*6)+1;
var images2="images/dice"+y+".png";
document.querySelector(".dice .img2").setAttribute("src",images2);
if(x>y)
{ document.querySelector("h1").innerText="Player1 Wins";
}
else if(y>x){
	document.querySelector("h1").innerText="Player2 Wins";
}
else if(y===x){
	 document.querySelector("h1").innerText="Draw";
}