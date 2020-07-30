
/*
        GIVEN I am taking a code quiz
        WHEN I click the start button
        THEN a timer starts and I am presented with a question
        WHEN I answer a question
        THEN I am presented with another question
        WHEN I answer a question incorrectly
        THEN time is subtracted from the clock
        WHEN all questions are answered or the timer reaches 0
        THEN the game is over
        WHEN the game is over
        THEN I can save my initials and score
        */

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
      document.querySelector('#timer').innerHTML = `${timer} seconds remaining...`;
  
      if( timer<1 ){
          // time is up! end the game
          showFinished();
      }
  }

  function showQuestion(){
    const currentQuestion = questions[questionNum];
    document.querySelector('#questions').innerHTML = currentQuestion.text;

    document.querySelector('#answers').innerHTML = '';
    for( var i=0; i<currentQuestion.answers.length; i++ ){
        const activeAnswer = currentQuestion.answers[i];
        document.querySelector('#answers').innerHTML += 
            `<button onClick="checkAnswer(event,'${activeAnswer}')" class="list-group-item">${activeAnswer}</button>`
    }
}

function checkAnswer( event, userAnswer ){
    event.preventDefault();

    console.log( `[checkAnswer] checking question, answer given: ${userAnswer}` );
    
    // check if user got hte question right, 
    const currentQuestion = questions[questionNum];
    // display a message            
    if( currentQuestion.correctAnswer === userAnswer ){
        document.querySelector('#alertCorrect').style.display = 'block';
        document.querySelector('#alertWrong').style.display = 'none';
        statsCorrectAnswers++;
    } else {
        document.querySelector('#alertCorrect').style.display = 'none';
        document.querySelector('#alertWrong').style.display = 'block';
        statsWrongAnswers++;
    }

    // move on to next question (if any more exist)
    questionNum = questionNum+1;
    if( questionNum >= questions.length ){
        // we are done! no more questions!
        showFinished();
        return;
    };

    // show next question
    showQuestion();
}

function showFinished(){
  // show whatever code for the finished display here
  document.querySelector('#alertCorrect').style.display = 'block';
  document.querySelector('#alertCorrect').innerHTML =  
      `You got this many right: ${statsCorrectAnswers}, and this many wrong: ${statsWrongAnswers}`;
  // stop the timer
  clearInterval( timerInterval );
}







function startGame(){
 timer = 200;
 timerInterval = setInterval( checkTime, 1000 );

  questionNum = 0;
  showQuestion();
  
  }
