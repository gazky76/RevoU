// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
  
    if (!name || !email || !interest) {
      alert('Please fill out all fields.');
      event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    }
  });
  