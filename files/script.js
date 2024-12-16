// Sample Questions
    const mcqQuestions = [
  { question: "টোবাকো মোজাইক ভাইরাসের প্রোটিন আবরণকে বলে-", options: ["ক্যাপসোমিয়ার", "ক্যাপসিড", "ভিরয়েডস", "গ্লাইকোপ্রোটিন"], answer: 1 },
  { question: "নিচের কোনটি পনির তৈরিতে ব্যবহৃত হয়?", options: ["অ্যামাইলেজ", "রেনিন", "পেকটিনেজ", "জাইমেজ"], answer: 1 },
  { question: "নিচের কোনটি হ্যাচ ও স্ল্যাক চক্রে কার্বনডাই-অক্সাইড গ্রহীতা?", options: ["রাইবুলোজ 1,5- বিসফসফেট", "3-ফসফোগ্লিসারিক অ্যাসিড", "ফসফোইনল পাইরুভিক অ্যাসিড", "অক্সালো অ্যাসিটিক অ্যাসিড"], answer: 2 },
  { question: "নিচের কোন কোষটি নিউক্লিয়াসবিহীন?", options: ["সিভনল", "প্যারেনকাইমা", "কোলেনকাইমা", "ট্র‍্যাকিড"], answer: 0 },
  { question: "নিউক্লিক অ্যাসিড পুনরাবৃত্ত একক কোনটি?", options: ["পেপটাইড", "নাইট্রোজেন বেস", "নিউক্লিওসাইড", "নিউক্লিওটাইড"], answer: 3 },
  { question: "নিচের কোনটি রেস্ট্রিকশন এনজাইম নয়?", options: ["pBR322", "EcoRI", "HindIII", "BamHI"], answer: 0 },
  { question: "পুস্পক উভিদের মূলে কোন ধরনের ভাস্কুলার বান্ডল থাকে?", options: ["সংযুক্ত", "সমপার্শ্বীয়", "অরীয়", "কেন্দ্রিক"], answer: 2 },
  { question: "দুই বা ততোধিক জোড়া বিপরীত বৈশিষ্ট্যসম্পন্ন জীবের মধ্যে ক্রস ঘটলে F2 জনুতে কোন ধরনের ফিনোটাইপিক অনুপাত পাওয়া যাবে?", options: ["9:3:3:1", "9:7", "13:3", "3:1"], answer: 0 },
  { question: "নিচের কোনটি Mollusca পর্বের প্রানী?", options: ["Wuchereria bancrofti", "Octopus punctatus", "Neanthes virens", "Aurelia aurita"], answer: 1 },
  { question: "নিচের কোনটি Arthropoda পর্বের বৈশিষ্ট?", options: ["হৃৎপিন্ড দুই প্রকোষ্ঠ", "ডায়াফ্রাম উপস্থিত", "ট্রাকিয়া", "প্যারাপোডিয়া চলনে সহায়তা করে"], answer: 2 },
  { question: "মানবদেহের ক্ষুদ্রতম হাড় কোনটি?", options: ["ম্যালিয়াস", "ইনকাস", "স্টেপস", "অটোলিথ"], answer: 2 },
  { question: "নিচের কোনটি আমিষ পরিপাকে সহায়তা করে না?", options: ["রেনিন", "ট্রিপসিন", "পেপসিন", "লাইপেজ"], answer: 3 },
  { question: "কোন ধমনী হৃৎপিন্ডের প্রাচীরে রক্ত সরবরাহ করে?", options: ["পালমোনারি", "করোনারি", "সাব-ক্লেভিয়ান", "বৃক্কীয়"], answer: 1 },
  { question: "কোন পর্বের প্রানীতে মেসোগ্লিয়া থাকে?", options: ["Annelida", "Porifera", "Cnidaria", "Mollusca"], answer: 2 },
  { question: "রক্তের কোন গ্রুপে অ্যান্টিজেন অনুপস্থিত?", options: ["গ্রুপ O", "গ্রুপ A", "গ্রুপ B", "গ্রুপ AB"], answer: 0 },
  { question: "নিচের কোন বৈশিষ্ট্যটি পলিজিন দ্বারা নিয়ন্ত্রিত হয় না?", options: ["উচ্চতা", "আকৃতি", "ত্বকের বর্ণ", "বুদ্ধিমত্তা"], answer: 1 },
  { question: "বিশ্বের প্রথম ম্যালেরিয়া প্রতিষেধক টিকা কোনটি?", options: ["Mosquifix", "Mosquirix", "Mosquitrix", "Mosquirelief"], answer: 1 },
  { question: "নিচের কোন অঙ্গের স্থিতিস্থাপক তরুণাস্থি পাওয়া যায় না?", options: ["বহিঃকর্ণ", "অন্তঃকর্ণ", "ইউস্টেশিয়ান নালি", "উপজিহবা"], answer: 1 },
  { question: "নিচের কোনটি মানুষের অক্ষীয় কঙ্কালতন্ত্রের অংশ?", options: ["শ্রোণী অস্থিচক্র", "বক্ষ অস্থিচক্র", "করোটি", "ফিমার"], answer: 2 },
  { question: "জিহবা থেকে স্বাদের অনুভূতি গ্রহণ করে কোন স্নায়ু?", options: ["অকুলোমোটর স্নায়ু", "গ্লসোফেরিঞ্জিয়াল স্নায়ু", "অপটিক স্নায়ু", "ট্রাইজেমিনাল স্নায়ু"], answer: 1 }
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
        #QUIZ:
        Name: ${name}
        Batch: ${batch}
        Email: ${email}
        Second Attempt: ${secondAttempt ? "Yes" : "No"}
        
        Total Marks: ${totalMarks}
        Correct Answers: ${correct}
        Wrong Answers: ${wrong}

        The correct will share in our Telegram Group.

        Your selected answer:
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
