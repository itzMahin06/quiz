// Sample Questions
    const mcqQuestions = [
  { question: "সাইনুসয়েড পাওয়া যায় কোনটিতে?", options: ["যকৃত", "প্লীহা", "পাকস্থলী", "ক্ষুদ্রান্ত"], answer: 0 },
  { question: "কোনটি লালারসের কোষীয় উপাদান নয়?", options: ["ইস্ট", "প্রোটোজোয়া", "লিউকোসাইট", "থ্রম্বোসাইট"], answer: 3 },
  { question: "রুই মাছের হৃতপিন্ডের বৃহত্তম প্রকোষ্ঠ কোনটি?", options: ["অ্যাট্রিয়াম", "ভেন্ট্রিকল", "সাইনাসভেনেসাস", "সায়ানো অ্যাট্রিয়াম"], answer: 0 },
  { question: "অ্যান্টিবায়োটিক কাদের দেহে কোনোরূপ প্রতিক্রিয়া সৃষ্টি করতে অক্ষম?", options: ["ভাইরাস", "ব্যাকটেরিয়া", "ছত্রাক", "শৈবাল"], answer: 0 },
  { question: "উদ্ভিদকোষের প্রাচীর কোন পদার্থে তৈরি ?", options: ["লিপিড", "প্রোটিন", "সেলুলোজ", "কাইটিন"], answer: 2 },
  { question: "উদ্ভিদকোষে কোষঝিল্লির বাইরের মৃত আবরণীকে কী বলে ?", options: ["প্লাজমামেমব্রেন", "প্রোটোপ্লাজম", "কোষ আবরনী", "কোষ প্রাচীর"], answer: 3 },
  { question: "কোষের pH ও পানির সাম্যতা বিধান করে কোনটি ?", options: ["কোষঝিল্লি", "প্লাস্টিড", "কোষগহবর", "সাইটোপ্লাজম"], answer: 3 },
  { question: "টনোপ্লাস্ট কোথায় থাকে ?", options: ["প্লাস্টিড", "ক্রোমোপ্লাস্ট", "কোষরস", "কোষগহবর"], answer: 3 },
  { question: "নিচের কোনটি স্টার্ট কোডন ?", options: ["AUG", "UAG", "UGA", "UAA"], answer: 0 },
  { question: "কৃত্রিমভাবে উদ্ভাবিত জেনেটিক কোডের সংখ্যা কত ?", options: ["৪৪ টি", "৫৪ টি", "৬৪ টি", "৭৪ টি"], answer: 2 }
];

    const timerElement = document.getElementById("timer");
    let timeLeft = 43200; // Timer in seconds

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
            <input type="radio" name="q${index}" value="${i}"> ${opt}
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
