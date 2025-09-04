// This script runs after the page is loaded to protect contact info from bots.
document.addEventListener('DOMContentLoaded', function() {

  // Paste your Base64 encoded strings here.
  const encodedEmail = "aGVsbG9AcGl4ZWx3aGlzay5jb20="; // Replace with your encoded email
  const encodedPhone = "NTEwLTkwOC0wNjMx";       // Replace with your encoded phone number

  // Find the email element on the page.
  const emailElement = document.getElementById('email');
  if (emailElement) {
    // Decode the email address.
    const decodedEmail = atob(encodedEmail);
    // Set the link to "mailto:" and the visible text.
    emailElement.href = 'mailto:' + decodedEmail;
    emailElement.textContent = "Contact Us"; // You can change this text if you like
  }

  // Find the phone number element on the page.
  const phoneElement = document.getElementById('phone');
  if (phoneElement) {
    // Decode the phone number and set the visible text.
    phoneElement.textContent = atob(encodedPhone);
  }

});