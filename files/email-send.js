// Function to send email with quiz details and results
function sendEmailToUser(formData, totalMarks, correctAnswers, incorrectAnswers) {
  const userEmail = formData.get("email");
  const userName = formData.get("fullName");

  // Collect answers
  const answers = Array.from(formData.entries())
    .filter(([key]) => key.startsWith("q"))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  // Email content
  const emailContent = `
    Hello ${userName},

    Thank you for participating in the quiz. Here are your results:

    Total Marks: ${totalMarks}
    Correct Answers: ${correctAnswers}
    Incorrect Answers: ${incorrectAnswers}

    Your Selected Answers:
    ${answers}

    Best regards,
    Quiz Team
  `;

  // EmailJS Integration
  emailjs.init("kVh15Ngyus594m84c"); // Replace with your EmailJS public key
  emailjs.send("service_thc8anb", "template_bkf7f9q", {
    to_email: userEmail,
    to_name: userName,
    message: emailContent,
  }).then(
    (response) => {
      console.log("Email sent successfully!", response.status, response.text);
    },
    (error) => {
      console.error("Failed to send email:", error);
    }
  );
}
