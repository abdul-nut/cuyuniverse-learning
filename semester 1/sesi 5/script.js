// Input
let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let loginButton = document.getElementById('login')
let signUpButton = document.getElementById('signUp')
let logoutButton = document.getElementById('logoutButton')
let haveAccountButton = document.getElementById('have')
let dontHaveAccountButton = document.getElementById('donthave')
let asAdmin = document.getElementById('admin')
let asBasic = document.getElementById('basic')
let registerView = document.getElementById('registerView')
let storageRole = localStorage.getItem('role')

// default display
loginButton.style.display = 'none'
logoutButton.style.display = 'none'
dontHaveAccountButton.style.display = 'none'
asAdmin.style.display = 'none'
asBasic.style.display = 'none'

let isLogin = localStorage.getItem('isLogin')

if (isLogin === 'true') {
    console.log(isLogin);
    registerView.style.display = 'none'
    logoutButton.style.display = 'block'
    if (storageRole === 'admin') {
        asAdmin.style.display = 'block'
        asBasic.style.display = 'none'
    } else {
        asAdmin.style.display = 'none'
        asBasic.style.display = 'block'
    }
}


function accountQuestion(displayLogin, displaySignUp, displayHaveAccount, dontHaveAccount) {
    loginButton.style.display = displayLogin
    signUpButton.style.display = displaySignUp
    haveAccountButton.style.display = displayHaveAccount
    dontHaveAccountButton.style.display = dontHaveAccount
}

function clearValue() {
    usernameInput.value = null;
    passwordInput.value = null;
}


function onSignUp() {

    localStorage.setItem("username", usernameInput.value)
    localStorage.setItem("password", passwordInput.value)

    if (usernameInput.value === 'admin' && passwordInput.value === 'admin123') {
        localStorage.setItem('role', 'admin')
    } else {
        localStorage.setItem('role', 'basic')
    }
    let lanjutLogin = confirm('lanjut ke menu login?')
    if (lanjutLogin === true) {
        accountQuestion('block', 'none', 'none', 'block')
    }
    clearValue();
}

function onLogin() {
    let storageUsername = localStorage.getItem('username')
    let storagePassword = localStorage.getItem('password')
    localStorage.setItem('isLogin', true)
    logoutButton.style.display = 'block'

    if (storageUsername == usernameInput.value && storagePassword == passwordInput.value) {

        if (storageRole === 'admin') {
            asAdmin.style.display = 'block'
            asBasic.style.display = 'none'
        } else {
            asAdmin.style.display = 'none'
            asBasic.style.display = 'block'
        }
        registerView.style.display = 'none'
    } else {
        alert('kamu harus membuat akun terlebih dahulu');
    }
    clearValue();
    isLogin = true;
}

function onLogout() {
    localStorage.clear();
    location.reload();
}

