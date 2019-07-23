 //=================================coding project 2==========================================================//
 
 var johnScore1 = 110;
var johnScore2 = 120;
var johnScore3 = 103;
//mike scores
var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;
//calculations
var avgJohn = (johnScore1 + johnScore2 + johnScore3) / 3;
var avgMike = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
//printing of results
if(avgJohn > avgMike){
    console.log('john\'s team wins ' +avgJohn);
} else if(avgJohn === avgMike){
    console.log("draw");
} else{
    console.log('mike\'s team wins ' +avgMike);
}



var johnScore1 = 89;
var johnScore2 = 120;
var johnScore3 = 103;
//mike scores
var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;
//calculations
var avgJohn = (johnScore1 + johnScore2 + johnScore3) / 3;
var avgMike = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
//printing of results
avgJohn < avgMike ? console.log(avgMike) : console.log(avgJohn);



var johnScore1 = 89;
var johnScore2 = 120;
var johnScore3 = 103;
//mike scores
var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;
//mary's scores
var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 105;
//calculations
var avgJohn = (johnScore1 + johnScore2 + johnScore3) / 3;
var avgMike = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
var avgMary = (maryScore1 + maryScore2 + maryScore3) / 3;
if(avgJohn > avgMike && avgJohn > avgMary){
    console.log('john\'s team is winner ' + avgJohn );
} else if(avgMike > avgJohn && avgMike > avgMary){
    console.log('mike\'s team is the winner ' + avgMike);
} else{
    console.log('mary\'s team is the winner ' + avgMary);
}