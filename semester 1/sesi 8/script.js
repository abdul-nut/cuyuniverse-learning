let passwordLength = document.getElementById('panjangPassword')
let password = document.getElementById('password')
let savePasswordButton = document.getElementById('savePassword')
let inputName = document.getElementById('fileName')

function generatePassword(len) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numerik = '0123456789'
    const specialCharacters = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
    const data = lowerAlphabet + upperAlphabet + numerik + specialCharacters;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword;
    alert('Password Has Been Generated' + newPassword);
}

function savePassword() {

    let fileName = inputName.value
    if (fileName == '') {
        alert('masukkan nama file sebelum menyimpan');
    } else {
        document.title = password.value;
        savePasswordButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
        savePasswordButton.setAttribute('download', `${fileName}`)
        setTimeout(() => {
            alert('berhasil disimpan');
        }, 1000);
    }

}