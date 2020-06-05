

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
        { text: "What colour is the sky?",
          answers: [ "Yellow", "Red", "Blue", "Green" ],
          correctAnswer: "Blue" },
        { text: "What sound does a dog make?",
          answers: [ "Woof", "Meow", "Ahhh", "Squeak",],
          correctAnswer: "Woof" },
        { text: "What sound does a cat make?",
          answers: [ "Woof", "Meow", "Ahhh", "Squeak" ],
          correctAnswer: "Meow" },
        { text: "What colour is grass?",
          answers: [ "Orange", "Red", "Blue", "Green" ],
          correctAnswer: "Green" }
    ];

var questionNum = 0;
let count = 150;
var timerText = document.getElementById("timer");


// function for show nextQuestion
function nextQuestion(){
        const currentQuestion = questions[questionNum];
        document.querySelector('#question').innerHTML = currentQuestion.text;

        document.querySelector('#answers').innerHTML = '';
        for( var i=0; i<currentQuestion.answers.length; i++ ){
            const activeAnswer = currentQuestion.answers[i];
            document.querySelector('#answers').innerHTML += 
                `<button onClick="nextQuestion()" class="buttons">${activeAnswer}</button>`
               
        }
        questionNum++ 

        setInterval(function(){
            count -= 1;
            timerText.textContent = count;
        }, 1000)

        

           



        }




    
    nextQuestion()







// Event listener for new question and set of answers
selectAnswer.addEventListener("click", nextQuestion);