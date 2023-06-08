const letraE = "enter";
const letraI = "imes";
const letraA = "ai";
const letraO = "ober";
const letraU = "ufat";


let textArea = document.querySelector(".textArea")
let btnEncrypt = document.querySelector(".btnEncrypt")
let btnDecrypt = document.querySelector(".btnDecrypt")
let NoResultContainer = document.querySelector(".NoResultContainer")
let resultEncryptText = document.querySelector(".resultEncryptText");
let resultContainer = document.querySelector(".resultContainer")
let btnCopy = document.querySelector(".btnCopy")



function decryptText(encryptedText) {
    let decrypted = encryptedText.replace(/enter/g, "e")
    decrypted = decrypted.replace(/imes/g, "i")
    decrypted = decrypted.replace(/ai/g, "a")
    decrypted = decrypted.replace(/ober/g, "o")
    decrypted = decrypted.replace(/ufat/g, "u")
    return decrypted
}

function encryptText(desencryptedText) {
    let encrypted = desencryptedText.replace(/e/g, letraE)
    encrypted = encrypted.replace(/i/g, letraI)
    encrypted = encrypted.replace(/a/g, letraA)
    encrypted = encrypted.replace(/o/g, letraO)
    encrypted = encrypted.replace(/u/g, letraU)
    return encrypted
}


function textEncryptResult() {
    let text = textArea.value;
    if (/[A-Z]/.test(text) || /[^\w\s]/.test(text)) {
        alert("Ingresa el texto solo en minusculas y sin acentos o caracteres especiales.");
    } else {
        resultEncryptText.innerHTML = encryptText(text);
    }
}

function textDecryptResult() {
    let text = textArea.value;
    if (/[A-Z]/.test(text) || /[^\w\s]/.test(text)) {
        alert("ingresa el texto solo en minusculas y sin acentos o caracteres especiales ('{$@.+})");
    } else {
        resultEncryptText.innerHTML = decryptText(text);
    }
}

btnEncrypt.addEventListener("click", function () {

    if (textArea.value === "") {
        NoResultContainer.style.display = "block";
        resultContainer.style.display = "none";

    } else {
        NoResultContainer.style.display = "none"
        resultContainer.style.display = "block"
        textEncryptResult();
    }
});

btnDecrypt.addEventListener("click", function () {

    if (textArea.value === "") {
        NoResultContainer.style.display = "block";
        resultContainer.style.display = "none";

    } else {
        NoResultContainer.style.display = "none"
        resultContainer.style.display = "block"
        textDecryptResult();
    }
});

btnCopy.addEventListener("click", function () {
    navigator.clipboard.writeText(resultEncryptText.innerHTML)
});


