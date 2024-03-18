const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
      answer: "Mitochondria"
    }
  ];
  
  let currentQuestion = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    questionElement.innerText = questions[currentQuestion].question;
    optionsElement.innerHTML = '';
  
    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(option) {
    const resultElement = document.getElementById('result');
    if (option === questions[currentQuestion].answer) {
      resultElement.innerText = 'Correct!';
    } else {
      resultElement.innerText = 'Wrong! The correct answer is: ' + questions[currentQuestion].answer;
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
      document.getElementById('result').innerText = '';
    } else {
      alert('You have finished the quiz!');
    }
  }
  
  // Display the first question when the page loads
  window.onload = displayQuestion;
  