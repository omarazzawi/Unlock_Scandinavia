//Direct Field Access
const proxy = document.getElementById("proxy");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");



/**designed to create a personalized welcome message for 
 * a user and then gradually fade out the welcome elements. 
 */
function welcomeUser(){
    const name = document.getElementById("userName").value.trim();
     
    if(name ===""){
        alert("Please inter your name :)")
        return;
    };

    const message = `Welcome ${name} The quiz is short, like summer here ,
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
/*const questions =[ 

    {
        "question":"What",
        "answers":[] ,
        "correct": 
    },
]*/