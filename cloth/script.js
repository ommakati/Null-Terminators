// Signup Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    localStorage.setItem(email, password);

    document.getElementById('signupMessage').textContent = "Signup successful! You can login now.";
    signupForm.reset();
  });
}

// Login Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
      alert("Login successful!");
      // Redirect to dashboard or homepage
      window.location.href = "dashboard.html"; // You can create this page later
    } else {
      document.getElementById('loginError').textContent = "Invalid email or password.";
    }
  });
}
