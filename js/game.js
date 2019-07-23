var score , dice,currentPayer,currentScore;

score = [0,0];

currentPlayer = 0;
currentScore = 0;


function game(){
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);
    document.querySelector('.dice-image').src = "images/dice-"+dice+".jpg";
    if(dice == 1 && currentPlayer == 0){
        document.querySelector('.current-score-0').textContent = 0
        score[0] = score[0] + 0;
        currentPlayer = 1;
        currentScore = 0;
        document.querySelector('.row-2-2').style.backgroundColor = "white";
        document.querySelector('.row-1-2').style.backgroundColor = "lightgrey";
    }else if(dice == 1 && currentPlayer == 1){
        document.querySelector('.current-score-1').textContent = 0;
        score[1] = score[1] + 0;
        currentPlayer = 0;
        currentScore = 0;
        document.querySelector('.row-1-2').style.backgroundColor = "white";
        document.querySelector('.row-2-2').style.backgroundColor = "lightgrey";
    }else{
        currentScore = currentScore + dice;
        document.querySelector('.current-score-'+currentPlayer).textContent = currentScore;
    }
    if(score[0] >= 100){
        document.querySelector('.name-0').textContent = "winner";
        document.querySelector('.row-1-2').style.backgroundColor = "cyan";
        document.querySelector('.dice-roll').style.display = 'none';
    }else if(score[1] >= 100){
        document.querySelector('.name-1').textContent = "winner";
        document.querySelector('.row-2-2').style.backgroundColor = "cyan";
        document.querySelector('.dice-roll').style.display = 'none';
    }
}

function hold(){
    if(currentPlayer == 0){
        score[0] = score[0] + currentScore;
        document.querySelector('.score-0').textContent = score[0];
        currentScore = 0;
        document.querySelector('.current-score-0').textContent = 0;
        currentPlayer = 1;
        document.querySelector('.row-2-2').style.backgroundColor = "white";
        document.querySelector('.row-1-2').style.backgroundColor = "lightgrey";
    }else{
        score[1] = score[1] + currentScore;
        document.querySelector('.score-1').textContent = score[1];
        currentPlayer = 0;
        currentScore = 0;
        document.querySelector('.current-score-1').textContent = 0;
        document.querySelector('.row-1-2').style.backgroundColor = "white";
        document.querySelector('.row-2-2').style.backgroundColor = "lightgrey";
    }
    if(score[0] >= 100){
        document.querySelector('.name-0').textContent = "winner";
        document.querySelector('.row-1-2').style.backgroundColor = "cyan";
        document.querySelector('.dice-roll').style.display = 'none';
        alert('congrats player 1 won');
    }else if(score[1] >= 100){
        document.querySelector('.name-1').textContent = "winner";
        document.querySelector('.row-2-2').style.backgroundColor = "cyan";
        document.querySelector('.dice-roll').style.display = 'none';
        alert('congrats player 2 won');
    }
}