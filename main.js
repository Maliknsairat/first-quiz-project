console.log("Malik");
/* START CODE UNDER THIS LINE */



const quizData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",

    a: "<script></script>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "a"
  },
   { question: "Where is the correct place to insert a JavaScript?",

    a: "the <div> section",
    b: "The <head> section",
    c: "The <body> section",
    d: "Both the <head> section and the <body> section are correct ",
    correct: "d"
},
   { question: "What is the correct syntax for referring to an external script called xxx.js?",
    

    a: "<script href=xxx.js>" ,
    b: "<script src=xxx.js>",
    c: "<script name=xxx.js>",
    d: "<script id=xxx.js>",
    correct: "b"
},
   { question: "How do you write (Hello World) in an alert box?",

    a: "msgBox(Hello World);",
    b: "alertBox(Hello World);",
    c: "alert(Hello World);",
    d: "msg(Hello World);",
    correct: "c"
 } ,

   { question: "How to write an IF statement in JavaScript?",

    a: "if i = 5 then",
    b: "if i = 5",
    c: "if (i == 5)",
    d: "if i == 5 then",
    correct: "c"
  },
  { question: "How do you call a function named myFunction?",
  a:"myFunction()",
  b:"call myFunction()",
  c:"call function myFunction()",
  d:"function = myfunction",
  correct:"a"

  },
  { question:"How to write an IF statement for executing some code if i is NOT equal to 5?",
  a:"if i <> 5",
  b:"if i =! 5 then",
  c:"if (i != 5) ",
  d:"if (i <> 5)",
  correct:"c"

  },
  
  { question:"How does a WHILE loop start?",
  a:"while (i <= 10; i++)",
  b:"while (i <= 10)",
  c:"i<10; while i++",
  d:"None of the above",
  correct:"b"
 },
 { question:"How do you round the number 7.25, to the nearest integer?",
  a:"Math.rnd(7.25)",
  b:"Math.round(7.25)",
  c:"rnd(7.25)",
  d:"round(7.25)",
  correct:"b"
 },
 { question:"How does a FOR loop start?",
  a:"for (i = 0; i <= 5; i++) ",
  b:"for i = 1 to 5",
  c:"for (i <= 5; i++)",
  d:"for (i = 0; i <= 5)",
  correct:"a"
 },
 { question:"How do you find the number with the highest value of x and y?",
  a:"ceil(x, y)",
  b:"Math.floor(x, y)",
  c:"Math.max(x, y)",
  d:"Math.pow",
  correct:"c"
 },
 { question:"Which event occurs when the user clicks on an HTML element?",
  a:"onchange",
  b:"onmouseclick",
  c:"hover",
  d:"onclick",
  correct:"d"
 },
 { question:`What is the correct  syntax to change the content of the HTML element?
 <p id="demo">This is a demonstration.</p>`,

  a:"document.getElementByName(p).innerHTML = Hello World!;",
  b:"#demo.innerHTML = Hello World!;",
  c:"document.getElementById(demo).innerHTML = Hello World!",
  d:"document.getElement().innerHTML = Hello World!;",
  correct:"c"
 },
 { question:"Which language runs in a web browser?",
  a:"javascript",
  b:"C",
  c:"Java",
  d:"Python",
  correct:"a"
 },
 { question:"What does CSS stand for?",
  a:"Central Style Sheets",
  b:"Cascading Style Sheets",
  c:"Cascading Simple Sheets",
  d:"Cascading style Sweep",
  correct:"b"
 },
 { question:"What does HTML stand for?",
  a:"Hyperloop Machine Language",
  b:"Hypertext Markdown Language",
  c:"Helicopters Terminals Motorboats Lamborginis",
  d:"Hypertext Markup Language",
  correct:"d"
 },
 { question:"What year was JavaScript launched?",
  a:"1993",
  b:"1995",
  c:"2000",
  d:"none of the above",
  correct:"b"
 },
 { question:"Who is making the Web standards?",
  a:"The World Wide Web Consortium",
  b:"Google",
  c:"Microsoft",
  d:"Mozilla",
  correct:"a"
 },
 { question:"Which the correct HTML element for the largest heading?",
  a:"<h6>",
  b:"<heading>",
  c:"<h1>",
  d:"<head>",
  correct:"c"
 },
 { question:"What is the correct HTML element for inserting a line break?",
  a:"<lb>",
  b:"<b>",
  c:"<br>",
  d:"<break>",
  correct:"c"
 },
 { question:"Choose the correct HTML element to define important text",
  a:"<important>",
  b:"<b>",
  c:"<i>",
  d:"<strong>",
  correct:"d"
 },
 { question:"What is the correct HTML for adding a background color?",
  a:"<back-ground>",
  b:"<body bg=yellow>",
  c:"<body style=background-color:yellow;> ",
  d:"<background>yellow</background>",
  correct:"c"
 },
 { question:"Choose the correct HTML element to define emphasized text",
  a:"<i>",
  b:"<italic>",
  c:"<b>",
  d:"<em>",
  correct:"d"
 },
 { question:"Which of these elements are all <table> elements?",
  a:"<table><tr><td>",
  b:"<table><head><tfoot>",
  c:"<table><tr><tt>",
  d:"<thead><body><tr>",
  correct:"a"
 },
 { question:"What is the correct HTML for inserting an image?",
  a:"<image src=image.gif alt=MyImage>",
  b:"<img src=image.gif alt=MyImage>",
  c:"<img alt=MyImage>image.gif</img>",
  d:"<img href=image.gif alt=MyImage>",
  correct:"b"
 },

];
const start_btn = document.querySelector("#start_btn");
const info_box1 = document.querySelector("#box");
const class_list=document.getElementsByClassName('.quiz-container')
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const time = document.getElementById("count");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let dis1=quiz.style.display
let dis2=info_box1.style.display


start_btn.addEventListener('click', ()=>{
 if(dis1 == ''){quiz.style.display= 'grid'}
 if(dis2 == ''){info_box1.style.display= 'none'}
 
})



let currentQuiz = 0;
let score = 0;
let counter= 180;




loadQuiz();

function loadQuiz() {
  
  let shuffle= quizData.sort(()=>Math.random()-.5)
  

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}



  let countD = setInterval( ()=> {
    
    counter--;

    if (counter >= 0) {
        
        time.innerHTML =`Timer : ${counter}  `
    }
    if (counter === 0) {
        submitBtn.disabled = true;
        time.innerHTML = `Times Up! You answered ${score}/${quizData.length} questions correctly`;
        clearInterval(countD)
        
        score++;
    } 
    
    
        
}, 1000);









function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++; 
      
    }
     

    currentQuiz++;
    if(answer !== quizData[currentQuiz].correct ){
      
    }


    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Try Again</button>
           `;
    }
  }
}
);
