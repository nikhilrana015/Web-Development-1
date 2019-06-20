
var buttonColors=["red","blue","green","yellow"]
var gamePattern=[];
var userClickedPattern=[];

var started=false;



$("body").keypress(function(){
	startOver();
	if(!started){
		nextSequence();
		started=true;
		
	}
});



	
function nextSequence() {
	userClickedPattern=[];
	level=level+1;
	$("h1").text("Level  "+level);
	var randomNumber=Math.floor(Math.random()*4);
	var randomChosenColor=buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
}

$(".btn").click(function(){
	var userChosenColour=$(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour); 
	checkAnswer(userClickedPattern.length-1);

});

function playSound(name){
	var audio=new Audio("sounds/"+name+".mp3");
	audio.play();

}


function animatePress(currentColor){
	$("#"+currentColor).addClass("pressed");
	setTimeout(function(){
		$("#"+currentColor).removeClass("pressed");
	},100);

}

function checkAnswer(currentLevel){

	if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
		console.log("success");
		 if(gamePattern.length===userClickedPattern.length){
			setTimeout(function(){
			nextSequence();
		},1000);}	


	}
	else{
		$("h1").text("Game Over,Press Any Key To Restart");
		$("body").addClass("game-over");
		playSound("wrong");
		setTimeout(function(){
			$("body").removeClass("game-over");
		},200);
	}

}


function startOver(){
	level=0;
	gamePattern=[];
	userClickedPattern=[];
	started=false;
}













// $("#green").click(function(){
// 	$(".green").fadeOut(100).fadeIn(100);
// 	var green=new Audio("sounds/green.mp3")
// 	green.play();
// });



// $("#red").click(function(){
// 	$(".red").fadeOut(100).fadeIn(100);
// 	var red=new Audio("sounds/red.mp3")
// 	red.play();
// });



// $("#yellow").click(function(){
// 	$(".yellow").fadeOut(100).fadeIn(100);
// 	var yellow=new Audio("sounds/yellow.mp3")
// 	yellow.play();
// });



// $("#blue").click(function(){
// 	$(".blue").fadeOut(100).fadeIn(100);
// 	var blue=new Audio("sounds/blue.mp3")
// 	blue.play();
// });
