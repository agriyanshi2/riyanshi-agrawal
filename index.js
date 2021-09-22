var readlineSync=require("readline-sync");

var score = 0;
var highScores=[
  {
    name: "Riyanshi",
    score: 3,
  },
  {
    name: "Unknown",
    score: 2,
  },
]

var questions=[
  {
    question: "The Coronavirus has originated from which country? ",
    answer: "China",
  },
  {
    question: "How many doses are required to be declared fully vaccinated? ",
    answer: "2",
  },
  {
    question: "What’s a safe distance to stay apart from someone who’s sick? ",
    answer: "6 feet",
  }
]

function welcome(){
  var userName=readlineSync.question("What is your name? ");
  console.log("Welcome "+userName+ "! Let's play Quiz on Nobel Coronavirus... ");
}

function play(question, answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You were right");
    score=score+1;
  }
  else{
    console.log("You were wrong");
  }

  console.log("Current Score: ",score);
  console.log("------------------");
}

function game(){
  for(var i=0;i<questions.length;i++){
    var currentQues=questions[i];
    play(currentQues.question,currentQues.answer);
  }
}
function showScores(){
  console.log("YAY! You Scored: ",score);
  console.log("Check out the High Scores: ");
  highScores.map(score => console.log(score.name, " : ",score.score))
}

welcome();
game();
showScores();