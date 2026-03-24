const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
  const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  // Validation
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Email check (basic)
  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address.");
    return;
  }

  // Simulate sending
  alert("Message sent successfully!");

  // Reset form
  form.reset();
});