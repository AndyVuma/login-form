const signInForm = document.querySelector('.portal form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const showHidePassButton = document.getElementById('show-hide-pass');
const forgotPassLink = document.getElementById('forgot-pass');
const signInButton = document.getElementById('signin');

// Show/hide password
showHidePassButton.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  showHidePassButton.src = type === 'password' ? 'assets/show-eye.svg' : 'assets/hide-eye.svg';
});

// Forgot password link
forgotPassLink.addEventListener('click', (event) => {
  event.preventDefault();
  alert('We are sorry, but the forgot password functionality is currently unavailable.');
});

// Sign in button
signInButton.addEventListener('click', (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (username === '' || password === '') {
    alert('Please fill in both the username and password fields.');
    return;
  }
  alert(`Welcome back, ${username}!`);
});

// Google sign-in button
const googleSignInButton = document.getElementById('google-signin');
googleSignInButton.addEventListener('click', () => {
  alert('Sorry, the Google sign-in functionality is not available at the moment.');
});

// Submit form on enter key
signInForm.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 || event.which === 13) {
    event.preventDefault();
    signInButton.click();
  }
});
