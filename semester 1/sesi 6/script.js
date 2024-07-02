let body = document.body
const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;
let info = document.getElementById('info')
let modeButton = document.getElementById('modeButton')
let homeButton = document.getElementById('homeButton')


modeButton.textContent += 'MODE -LIGHT'

function switchMode() {
    if (darkRemainingLeft == 1) {
        info.textContent = `fitur dark mode sudah habis`
        modeButton.style.display = 'none'
        homeButton.textContent = 'RESTART'
        return;
    }
    darkCounter += 1
    darkRemainingLeft = darkLimit - darkCounter;
    // Render ke info element
    info.textContent = `Mengganti Mode Maximal 4 kali dan sudah terpakai ${darkCounter}x`
    let toogle = body.classList.toggle("dark")
    if (toogle) {
        modeButton.textContent = 'MODE -DARK'
    } else {
        modeButton.textContent = 'MODE -LIGHT'
    }
}

function pdiMode() {
    console.log('mode pdi');
    body.classList.toggle('pdi')
}

function reRender() {
    location.reload();
}