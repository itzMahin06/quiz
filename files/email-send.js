emailjs.init("kVh15Ngyus594m84c"); // Replace with your EmailJS User ID

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  let correct = 0;
  let wrong = 0;
  const userAnswers = [];

  mcqQuestions.forEach((q, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer) {
      userAnswers.push({ question: q.question, selected: q.options[parseInt(answer.value)] });
      if (parseInt(answer.value) === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    }
  });

  const totalMarks = correct - wrong * 0.25;

  // Prepare the answers as a formatted string
  const answers = userAnswers
    .map((ans, index) => `Q${index + 1}: ${ans.question}\nSelected: ${ans.selected}`)
    .join("\n");

  // EmailJS template parameters
  const templateParams = {
    name: name,
    email: email,
    totalMarks: totalMarks.toFixed(2),
    correct: correct,
    wrong: wrong,
    answers: answers,
  };

  // Send the email silently
  emailjs
    .send("service_thc8anb", "template_3uvwr5r", templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
});
