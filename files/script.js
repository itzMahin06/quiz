// Sample Questions
    const mcqQuestions = [
      { question: "উদ্ভিদের বৈজ্ঞানিক নামের ভাষা?", options: ["গ্রীক", "ইটালিক", "ল্যাটিন", "কোনোটি নয়"], answer: 2 }, 
{ question: "মানবদেহের দীর্ঘতম কোষ কোনটি?", options: ["স্নায়ু কোষ", "রক্ত কোষ", "যকৃত কোষ", "পেশী কোষ"], answer: 0 },
{ question: "কোনটি কোষের বর্জ্য পদার্থ?", options: ["উদ্বায়ী তেল", "ট্যানিন", "ল্যাটেক্স", "সবগুলো"], answer: 3 },
{ question: "এন্ডোপ্লাজমিক রেটিকুলামের পর্দা কোন জাতীয়?", options: ["প্রোটিন", "লিপিড", "লিপোপ্রোটিন", "ফসপোলিপিড"], answer: 3 },
{ question: "উদ্ভিদ কোষের কার্বোহাইড্রেট ফ্যাক্টরি হলো-", options: ["লাইসোজোম", "রাইবোজোম", "গলজি বডি", "এন্ডোপ্লাজমিক রেটিকুলাম"], answer: 2 }, 
{ question: "কোষের সাইটোপ্লাজমে কোনটি বেশি পরিমাণে থাকে?", options: ["শর্করা", "পানি", "চর্বি", "প্রোটিন"], answer: 1 },
    ];

    const timerElement = document.getElementById("timer");
    let timeLeft = 600; // Timer in seconds

    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        clearInterval(timer);
        document.getElementById("quizForm").submit();
      }
    }

    const timer = setInterval(updateTimer, 1000);

    const questionsDiv = document.getElementById("questions");
    mcqQuestions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");
      q.options.forEach((opt, i) => {
        optionsDiv.innerHTML += `
          <label>
            <input type="radio" name="q${index}" value="${i}" required> ${opt}
          </label>
        `;
      });
      questionDiv.appendChild(optionsDiv);
      questionsDiv.appendChild(questionDiv);
    });

    // Handle Form Submission
    const form = document.getElementById("quizForm");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const batch = document.getElementById("batch").value;
      const secondAttempt = document.getElementById("secondAttempt").value === "yes";
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

      let totalMarks = correct - wrong * 0.25;
      if (secondAttempt) totalMarks -= 3;

      // Prepare data for Telegram
      let submissionData = `
        New Quiz Submission:
        Name: ${name}
        Batch: ${batch}
        Email: ${email}
        Second Attempt: ${secondAttempt ? "Yes" : "No"}
        Total Marks: ${totalMarks}
        Correct Answers: ${correct}
        Wrong Answers: ${wrong}

        Answers:
      `;

      userAnswers.forEach((answer, index) => {
        submissionData += `
        Q${index + 1}: ${answer.question}
        Selected: ${answer.selected}
        `;
      });

      // Send to Telegram
      const botToken = "7569656067:AAEoV4nr6jhqHVKONDYf7k8hxzhkBfTXyUI";
      const chatId = "-1002329670467";

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: submissionData }),
      });

      // Show Success Message
      form.style.display = "none";
      messageDiv.style.display = "block";
    });
