const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacter = "!@#$%^&*()";
const FunnyPassword = ["password",
  "ineedapassword",
  "changeme",
  "secret",
  "iamforgetful",
  "newpassword",
  "IamACompleteIdiot",
  "nothing",
  "nothingagain",
  "iforgot",
  "whydoialwaysforget",
  "qwerty",
  "asdf",
  "user",
  "YouWontGuessThisOne",
  "PasswordShmashword",
  "youmoron",
  "doubleclick",
  "iamnottellingyoumypw",
  "masterpassword",
  "yetanotherpassword",
  "nomorepasswords",
  "password123",
  "myonlypassword",
  "cantremember",
  "dontaskdonttell",
  "memorysucks",
  "earlyalzheimers",
  "passwordforoldpeople"];
let randomNumber_alphabet, randomNumber_specialCharacter, randomNumber_Number, passwordGenerator_shower = [];
// PasswordGenerator -- 
const PasswordGenerator = (NumberLength, AlphabetLength) => {
  randomNumber_alphabet = (alphabet.charAt(Math.round(Math.random() * (alphabet.length - 1)))).toUpperCase();
  randomNumber_specialCharacter = specialCharacter.charAt(Math.round(Math.random() * (specialCharacter.length - 1)));
  let passwordNumber = [];
  const passwordNumber_function = () => {
    for (let i = 0; i < NumberLength; i++) {
      randomNumber_Number = (Math.round(Math.random() * 9)).toString();
      passwordNumber.push(randomNumber_Number)
    }
    passwordNumber = (passwordNumber.join("").toString());
  };
  let passwordAlphabet = [];
  const passwordAlphabet_function = () => {
    for (let i = 0; i < AlphabetLength; i++) {
      randomNumber_alphabet = (alphabet.charAt(Math.round(Math.random() * (alphabet.length - 1)))).toLowerCase()
      passwordAlphabet.push(randomNumber_alphabet)
    }
    passwordAlphabet = (passwordAlphabet.join("").toString());
  };
  let array_PasswordGenerator = [passwordNumber, passwordAlphabet, randomNumber_alphabet, randomNumber_specialCharacter];
  const randomArrayNumber = Math.round(Math.random() * (array_PasswordGenerator.length));
  let randomArrayNumber_Expender = randomArrayNumber, randomArrayNumber_looper = randomArrayNumber;
  while (array_PasswordGenerator.length > randomArrayNumber_Expender) {
    passwordGenerator_shower.push(array_PasswordGenerator[randomArrayNumber_looper]);
    randomArrayNumber_looper++
    randomArrayNumber_Expender++
  }
  let randomArrayNumber_Expender_2 = array_PasswordGenerator.length - randomArrayNumber;
  let randomArrayNumber_Looper_2 = 0;
  while (array_PasswordGenerator.length > randomArrayNumber_Expender_2) {
    passwordGenerator_shower.push(array_PasswordGenerator[randomArrayNumber_Looper_2]);
    randomArrayNumber_Looper_2++
    randomArrayNumber_Expender_2++

  }
  passwordNumber_function()
  passwordAlphabet_function()
  passwordGenerator_shower = (passwordGenerator_shower.join("").toString()).replace(/,/g, "");
}
class Password {
  constructor() {
  }
  generateWeakPassword() {
    PasswordGenerator(1, 1)
    this.Password = passwordGenerator_shower
    passwordGenerator_shower = []
  }
  generateStrongPassword() {
    PasswordGenerator(3, 3)
    this.Password = passwordGenerator_shower
    passwordGenerator_shower = []
  }
  generateSuperStrongPassword() {
    PasswordGenerator(5, 7)
    this.Password = passwordGenerator_shower
    passwordGenerator_shower = []
  }
  generateFunnyPassword() {
    let randomNumber_FunnyPassword = Math.round(Math.random() * (FunnyPassword.length));
    (this.Password = (FunnyPassword[randomNumber_FunnyPassword]))
  }
  get Password_() {
    return `<label class='pass'>${this.Password}</label>`
  }
}
const Message_1 = "PASSWORD : ";
const copy_btn = (id) => {
  document.querySelector(`#${id}`).addEventListener("click", (event) => {
    event.preventDefault()
    navigator.clipboard.writeText(document.querySelector(`#${id}`).parentNode.firstElementChild.innerText).then(_ => {
      console.warn('copied successfully!');
    })
  })
};
const run = new Password("Password");
document.querySelector("#generateWeakPassword").addEventListener("click", (event) => {
  event.preventDefault()
  run.generateWeakPassword()
  const show_WeakPassword = document.querySelector("#show-WeakPassword");
  show_WeakPassword.hidden = false;
  show_WeakPassword.innerHTML = `${run.Password_} <button type="button" class="btn-copy" id="WeakPassword">Copy</button>`;
  copy_btn("WeakPassword");
  console.log(`${Message_1} ${run.Password}`)
});
document.querySelector("#generateStrongPassword").addEventListener("click", (event) => {
  event.preventDefault()
  run.generateStrongPassword()
  document.querySelector("#show-StrongPassword").hidden = false;
  document.querySelector("#show-StrongPassword").innerHTML = `${run.Password_} <button type="button" class="btn-copy" id="StrongPassword">Copy</button>`;
  copy_btn("StrongPassword");
  console.log(`${Message_1} ${run.Password}`)
})
document.querySelector("#generateSuperStrongPassword").addEventListener("click", (event) => {
  event.preventDefault()
  run.generateSuperStrongPassword()
  document.querySelector("#show-SuperStrongPassword").hidden = false;
  document.querySelector("#show-SuperStrongPassword").innerHTML = `${run.Password_} <button type="button" class="btn-copy" id="SuperStrongPassword">Copy</button>`;
  copy_btn("SuperStrongPassword");
  console.log(`${Message_1} ${run.Password}`)
})
document.querySelector("#generateFunnyPassword").addEventListener("click", (event) => {
  event.preventDefault()
  run.generateFunnyPassword()
  document.querySelector("#show-FunnyPassword").hidden = false;
  document.querySelector("#show-FunnyPassword").innerHTML = `${run.Password_} <button type="button" class="btn-copy" id="FunnyPassword">Copy</button>`;
  copy_btn("FunnyPassword");
  console.log(`${Message_1} ${run.Password}`)
})