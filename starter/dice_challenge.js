 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, currentPlayer, gamePlaying; 
var previousRoll;


initGame();

 dice = Math.floor(Math.random() * 6) + 1;

 //document.querySelector('#current-' + activePlayer).textContent = dice;
/*document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + 
'</em>'; */
//var x = document.querySelector('#score-0').textContent;
//console.log(x);


// function button(){
//     //do something here
// }
// button();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // need a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //display the result
    var diceDOM = document.querySelector('.dice') 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    //update the round score only if the roll number isn't 1 and if 6 rolls twice
        if(dice !== 1) {
            //add the score
            roundScore += dice;
            document.querySelector('#current-' + currentPlayer).textContent = roundScore;
         } else if ( dice === 6 && previousRoll === 6) {
             //player loses score
            scores[currentPlayer] = 0;
            document.querySelector('#score-' + currentPlayer).textContent = 0;
            nextPlayer();
         }
          else {
            //next player
           nextPlayer();
         
            
        }
        previousRoll = dice;

    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
            // add users current score to the global score
        scores[currentPlayer] += roundScore;


        //update the User interface
        document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
    
        //check if the player won the game
            if(scores[currentPlayer] >= 100){
                document.querySelector("#name-1" + currentPlayer).textContent = "Winner!";
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('player-' + currentPlayer + '-panel').classList.add('winner')
                document.querySelector('player-' + currentPlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else {
                //Next Player
                nextPlayer();
            }
    }
    
   
});

function nextPlayer(){
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
            roundScore = 0;

            //updates the score in the UI
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

             document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', initGame);

function initGame(){
    scores = [0, 0];
    currentPlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



    
}






