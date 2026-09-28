const passwordField = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function secureRandom(max) {
  if (max <= 0 || max > 256) {
    throw new Error("Invalid character set size.");
  }

  const limit = Math.floor(256 / max) * max;
  const randomByte = new Uint8Array(1);

  do {
    crypto.getRandomValues(randomByte);
  } while (randomByte[0] >= limit);

  return randomByte[0] % max;
}

function generatePassword() {
  const length = parseInt(lengthInput.value, 10);

  let characters = "";

  if (uppercaseInput.checked) characters += uppercase;
  if (lowercaseInput.checked) characters += lowercase;
  if (numbersInput.checked) characters += numbers;
  if (symbolsInput.checked) characters += symbols;

  if (!characters) {
    passwordField.value = "Select at least one character type";
    return;
  }

  if (!Number.isInteger(length) || length < 4 || length > 128) {
    passwordField.value = "Choose a length between 4 and 128";
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters[secureRandom(characters.length)];
  }

  passwordField.value = password;
}

async function copyPassword() {
  if (!passwordField.value) return;

  try {
    await navigator.clipboard.writeText(passwordField.value);

    const originalText = copyButton.textContent;
    copyButton.textContent = "Copied!";

    setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1500);
  } catch {
    passwordField.select();
    document.execCommand("copy");
  }
}

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);

generatePassword();
