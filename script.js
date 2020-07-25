
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

