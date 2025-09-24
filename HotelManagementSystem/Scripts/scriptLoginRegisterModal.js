const loginIcon = document.getElementById('loginIcon');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginContainer = document.getElementById('loginContainer');
const registerContainer = document.getElementById('registerContainer');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const togglePasswordBtns = document.querySelectorAll('.toggle-password');

// open modal when login icon is clicked
loginIcon.addEventListener('click', openAuthModal);
book_btn_1.addEventListener('click', openAuthModal);
book_btn_2.addEventListener('click', openAuthModal);
book_btn_3.addEventListener('click', openAuthModal);

function openAuthModal(e) {
    e.preventDefault();
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // always show login form first
    showLoginForm();
}


// close modal when close button is clicked
closeModal.addEventListener('click', function () {
    closeAuthModal();
});

// prevent modal from closing when clicking outside
authModal.addEventListener('click', function (e) {
    e.stopPropagation();
});

// escape key functionality
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && authModal.classList.contains('active')) {
        closeAuthModal();
    }
});

// function to close the auth modal
function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
    // reset forms
    loginForm.reset();
    registerForm.reset();
}

// switch to register form
showRegister.addEventListener('click', function (e) {
    e.preventDefault();
    showRegisterForm();
});

// switch to login form
showLogin.addEventListener('click', function (e) {
    e.preventDefault();
    showLoginForm();
});

// function to show register form
function showRegisterForm() {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
    registerContainer.style.animation = 'slideUp 0.3s ease';
}

// function to show login form
function showLoginForm() {
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    loginContainer.style.animation = 'slideUp 0.3s ease';
}

// toggle password visibility for all password fields
togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const passwordInput = document.getElementById(targetId);
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
});

// handle login form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('remember').checked;

    console.log('Login attempt:', { email, password, remember });
    alert('Login Successfully!');

    closeAuthModal();
});

// handle register form submission
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // validate terms agreement
    if (!agreeTerms) {
        alert('Please agree to the Terms & Conditions');
        return;
    }

    console.log('Registration attempt:', {
        firstName, lastName, email, password, phone, agreeTerms
    });

    alert('Registration form submitted!');
    closeAuthModal();
});

// add smooth transitions for form inputs
const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});