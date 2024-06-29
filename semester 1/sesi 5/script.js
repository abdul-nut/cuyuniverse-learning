// Input
let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let loginButton = document.getElementById('login')
let signUpButton = document.getElementById('signUp')
let logoutButton = document.getElementById('logoutButton')
let haveAccountButton = document.getElementById('have')
let dontHaveAccountButton = document.getElementById('donthave')


loginButton.style.display = 'none'
dontHaveAccountButton.style.display = 'none'


function accountQuestion(displayLogin, displaySignUp, displayHaveAccount, dontHaveAccount) {
    loginButton.style.display = displayLogin
    signUpButton.style.display = displaySignUp
    haveAccountButton.style.display = displayHaveAccount
    dontHaveAccountButton.style.display = dontHaveAccount
}


function onSignUp() {

    localStorage.setItem("username", usernameInput.value)
    localStorage.setItem("password", passwordInput.value)

    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('role', 'admin')
    } else {
        localStorage.setItem('role', 'basic')
    }

}

function onLogin() {
    let storageUsername = localStorage.getItem('username')
    let storagePassword = localStorage.getItem('password')
    if (storageUsername == usernameInput.value && storagePassword == passwordInput.value) {
        alert('berhasil login');
    } else {
        alert('kamu harus membuat akun terlebih dahulu');
    }
}

function onLogout() {
    localStorage.clear();
    location.reload();
}