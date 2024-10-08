'use strict';

// console.log(document.querySelector('.message')
// .textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number..';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}



let secretNumber = Math.trunc((Math.random()*20)) + 1;


let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener
('click' , function(){
    const guess =Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if (!guess){
        // document.querySelector('.message').textContent =
        // '❌ No Number!';
        displayMessage('❌ No Number!');

    } else if( guess == secretNumber){
        // document.querySelector('.message').textContent =
        // '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent =
        secretNumber;

        document.querySelector('body').style
        .backgroundColor = 'lime';


        document.querySelector('.number').style.width =
        '30rem';

        

        if( score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent =
            highscore;
        }
        
       
    } else if(guess != secretNumber){
        if( score > 1){
        // document.querySelector('.message').textContent = 
        // (guess < secretNumber) ?
        // '⬇️ Too Low!':'⬆️ Too High!';
        displayMessage((guess < secretNumber) ?
        '⬇️ Too Low!':'⬆️ Too High!');
        score--;
        document.querySelector('.score').textContent =
        score;
        }else{
        
        // document.querySelector('.message').textContent =
        // '⚠️ You Lost!';
        displayMessage('⚠️ You Lost!');
        document.querySelector('.score').textContent =
        0;}
    // }else if (guess > secretNumber){
    //     if( score > 1){
    //     document.querySelector('.message').textContent =
    //     '⬆️ Too High!';
    //     score--;
    //     document.querySelector('.score').textContent =
    //     score;
    //     }else{
    //     score--;
    //     document.querySelector('.message').textContent =
    //     '⚠️ You Lost!';
    //     document.querySelector('.score').textContent =
    //     0;
    //     }
    }
})

document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    secretNumber = Math.trunc((Math.random()*20)) + 1;
    // document.querySelector('.message').textContent =
    // 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent =
    score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value =
    ' ';
    document.querySelector('body').style
    .backgroundColor = '#222';
    document.querySelector('.number').style.width =
    '15rem';

})

