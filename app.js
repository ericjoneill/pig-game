/*
GAME RULES:
- player can ROLL DICE as much as they want but if they
roll a 6 twice, their entire score is removed and it is
the next players turn. also, if a 1 is rolled, it is
automatically next players turn and the CURRENT score is
dropped. The strategy is to HOLD when you feel you have
made a good haul and don't feel you need to keep pressing
your luck.

*/

// var scores, roundScore, activePlayer,

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1

// // document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// // var x = document.querySelector('#score-0').textContent
// // console.log(x)

// // document.querySelector('.dice').style.display = 'none'

// document.getElementById('score-0').textContent = '0'
// document.getElementById('score-1').textContent = '0'
// document.getElementById('current-0').textContent = '0'
// document.getElementById('current-1').textContent = '0'

// // function btn(){
// //     do something
// // }

// document.querySelector('.btn-roll').addEventListener('click', function() {

//     //1. Random number
//     var dice = Math.floor(Math.random() * 6) + 1

//     //2. Display the result
//     var diceDOM = document.querySelector('.dice')
//     diceDOM.style.display = 'block'
//     diceDOM.src = 'dice-' + dice + '.png';


//     //3. Update round score if the rolled number was NOT a 1

//     if (dice !== 1){
//         //add score
//         roundScore += dice
//         document.querySelector('#current-' + activePlayer).textContent = roundScore
//         checkWinner
//     } else {
//         //next player
//         nextPlayer()


//         // document.querySelector('.player-0-panel').classList.remove('active')
//         // document.querySelector('.player-1-panel').classList.add('active')
//     }
// })

//         document.querySelector('.player-0-panel').classList.toggle('active')
//         document.querySelector('.player-1-panel').classList.toggle('active')

//         document.querySelector('.btn-hold').addEventListener('click', function(){
//             // Add CURRENT score to GLOBAL score
//             scores[activePlayer] += roundScore;
//             // Update the UI
//             document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
//             //Check if player won the game
//             nextPlayer()
//             // win
//             if (scores[activePlayer] >= 10){
//                 document.querySelector('#name-' +activePlayer).textContent = 'Winner!'
//             }
//         })

//         function nextPlayer(){
//             activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//             roundScore = 0;
    
//             document.getElementById('current-0').textContent = '0'
//             document.getElementById('current-1').textContent = '0'
    
//             document.querySelector('.player-0-panel').classList.toggle('active')
//             document.querySelector('.player-1-panel').classList.toggle('active')

//             document.querySelector('.dice').style.display = 'none'
//         }



        var scores, roundScore, activePlayer, gamePlaying, prevdy, winningScore;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        var diceCloneDOM = document.querySelector('.diceClone');
        diceCloneDOM.style.display = 'block';
        // diceCloneDOM.src = 'dice-' + prevdy + '.png';
        if (prevdy === 0){
            diceCloneDOM.src = 'dice-1.png';
        } else if(prevdy === undefined){
            diceCloneDOM.src = 'dice-' + dice + '.png';
        } else {
            diceCloneDOM.src = 'dice-' + prevdy + '.png';
        }



        //3. Update the round score IF the rolled number was NOT a 1
        if (prevdy === 6 && dice === 6){
            document.getElementById('score-' + activePlayer).textContent = '0';
            document.getElementById('current-' + activePlayer).textContent = '0';
            scores[activePlayer] = 0;
            roundScore = 0;
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prevdy = dice;
        } else {
            //Next player
            prevdy = 0;
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    // document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('.btn-adjustWinner').addEventListener('click', function(){
//     // take input and add to global winningScore
// })

function adjustWinner(){
    winningScore = document.getElementById("myInput").value;

}