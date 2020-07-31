
    const questions = [
        { 
          question: "What colour is the sky?",
          answers: [ "Yellow", "Red", "Blue", "Green" ],
          correctAnswer: "Blue" 
        },
        { 
          question: "What sound does a dog make?",
          answers: [ "Woof", "Meow", "Ahhh", "Squeak",],
          correctAnswer: "Woof" 
        },
        { 
          question: "What sound does a cat make?",
          answers: [ "Woof", "Meow", "Ahhh", "Squeak" ],
          correctAnswer: "Meow" 
        },
        { 
          question: "What colour is grass?",
          answers: [ "Orange", "Red", "Blue", "Green" ],
          correctAnswer: "Green" 
        }

    ];
    let timer;
    let questionNum;
    let statsCorrectAnswers = 0;
    let statsWrongAnswers = 0;
    let timerInterval;

    function checkTime(){
      timer = timer - 1;
      document.querySelector('#timer').innerHTML = `Countdown: ${timer}` ;
  
      if( timer<1 ){
          
          showFinished();
      }
  }

  function showQuestion(){
    const currentQuestion = questions[questionNum];
    document.querySelector('#question').innerHTML = currentQuestion.text;

    document.querySelector('#answers').innerHTML = '';
    for( var i=0; i<currentQuestion.answers.length; i++ ){
        const activeAnswer = currentQuestion.answers[i];
        document.querySelector('#answers').innerHTML += 
        `<li onClick="checkAnswer(event,'${activeAnswer}')" class="list-group-item">${activeAnswer}</li>`
    }
}

function checkAnswer( event, userAnswer ){
    event.preventDefault();

    console.log( `[checkAnswer] checking question, answer given: ${userAnswer}` );
    

    const currentQuestion = questions[questionNum];
         
    if( currentQuestion.correctAnswer === userAnswer ){
        document.querySelector('#alertCorrect').style.display = 'block';
        document.querySelector('#alertWrong').style.display = 'none';
        statsCorrectAnswers++;
    } else {
        document.querySelector('#alertCorrect').style.display = 'none';
        document.querySelector('#alertWrong').style.display = 'block';
        statsWrongAnswers++;
    }

   
    questionNum = questionNum+1;
    if( questionNum >= questions.length ){
        
        showFinished();
        return;
    };

    
    showQuestion();
}

function showFinished(){
  document.querySelector('#alertCorrect').style.display = 'block';
  document.querySelector('#alertCorrect').innerHTML =  
      `You got this many right: ${statsCorrectAnswers}, and this many wrong: ${statsWrongAnswers}`;

  clearInterval( timerInterval );
}


function startGame(){
 timer = 200;
 timerInterval = setInterval( checkTime, 1000 );

 questionNum = 0;
 showQuestion();

}

startGame();
