//Direct Field Access
const proxy = document.getElementById("proxy");
const question = document.getElementById("question");
const fristAnswer = document.getElementById("answer0");
const secorndAnswer = document.getElementById("answer1");
const thirdanswer = document.getElementById("answer2");



/**designed to create a personalized welcome message for 
 * a user and then gradually fade out the welcome elements. 
 */
function welcomeUser(){
    const name = document.getElementById("userName").value.trim();
     
    if(name ===""){
        alert("Please inter your name :)")
        return;
    };

    const message = `Welcome ${name},  The quiz is short, like summer here ,
      Skål!(That's "cheers" with a side of kanelbullar!) `;

    const newClass = document.getElementById("welcomeMessage");

    newClass.textContent= message;

    // Use a bulid-in function to fade the button
    setTimeout(()=>{
        document.getElementById("btn-message").classList.add("fade");

    }, 500);

    // Use a bulid-in function to fade the button

    setTimeout(()=>{
        
        document.getElementById("userName").classList.add('fade-slowly');
        newClass.classList.add('fade-slowly');

    }, 3000);

    // Use a bulid-in faction to remove the hole elements after 5 secornd

    setTimeout(()=>{
        document.getElementById("messageContainer").style.display = "none";

    },5000);

}


// An array of questions.
const questions = [ 

    {
        "question":"1: We all love IKEA, but which country was it founded in?",
        "answers":['Denmark' ,'Sweden' , 'Finland'] ,
        "correct": 1
    },

    {
        "question":"2: I'm a country often confused for a Scandinavian one, but I don't truly belong. Who am I?",
        "answers":['Denmark' ,'Sweden' , 'Finland'] ,
        "correct": 2
    },

    {
        "question":"3: What is the capital of Norway ?",
        "answers":['Oslo' ,'Helsinki' , 'Copenhagen'] ,
        "correct": 0
    },

    {
        "question":"4: Which Scandinavian capital city is famously spread across numerous islands, all connected to each other ?",
        "answers":['Copenhagen' ,'Stockholm' , 'Oslo'] ,
        "correct": 1
    },

    {
        "question":"5: Which Scandinavian capital city is famously spread across numerous islands, all connected to each other ?",
        "answers":['Copenhagen' ,'Stockholm' , 'Oslo'] ,
        "correct": 1
    },

    {
        "question":"6: which is the largest coffee chain in the  Scandinavian countries. ?",
        "answers":['Starbucks' ,"Wayne's Coffee" , 'Espresso House'] ,
        "correct": 1
    },

    {
        "question":"7: Alright, alright, we get it, you're amazing at recycling, Scandinavia! But which one of you is the best, the absolute king of the compost bin??",
        "answers":['Denmark' ,'Sweden' , 'Norway'] ,
        "correct": 1
    },

    {
        "question":" 8: Which Danish store is basically IKEA, but with a different accent?",
        "answers":['JYSK' ,'MIO' , 'ILVA'] ,
        "correct": 0
    },

    {
        "question":" 9: Mads Mikkelsen, the man who can make even eating a liver look sophisticated (and terrifying!) in Hannibal,but which mysterious land did he emerge from?",
        "answers":['Denmark' ,'Sweden' , 'Norway'] ,
        "correct": 0
    },

    {
        "question":" 10: Its capital is a modern art hub ?",
        "answers":['Denmark' ,'Sweden' , 'Norway'] ,
        "correct": 2
    },
]

/**
 * Triggers the functions responsible for loading both questions and answers.
 */
function quizProxy(){

    let questionNumber = 0;

    /**
     * Loads a question into the display.
     */
    function loadQustion (){

    question.innerText = questions[questionNumber].question;

    }

    /**
     * Loads a Answers into the display.
     */

    function loadAnswers () {

    fristAnswer.innerHTML = questions[questionNumber].answers[0];
    secorndAnswer.innerText = questions[questionNumber].answers[1];
    thirdanswer.innerText = questions[questionNumber].answers[2];

    }

}


let correctScoreAmount = 0;
let inCorrectScorAmount = 0;

function checkAnwer (selectedAnswer){
    correctAnswer = questions[questionNumber].correct;
    if (selectedAnswer === correctAnswer){
        console.log('high five');
        correctScoreAmount ++;
        document.getElementById("correctScore").innerText = correctScoreAmount;

    }
}

quizProxy();