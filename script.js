const alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacter = "!@#$%^&*()"
let randomNumber_alphabet ,randomNumber_specialCharacter ,randomNumber_Number;
const weakPasswordGenerator = ()=>{
    randomNumber_alphabet = alphabet.charAt(Math.round(Math.random()*alphabet.length-1));
    randomNumber_specialCharacter = specialCharacter.charAt(Math.round(Math.random()*specialCharacter.length-1));
    randomNumber_Number = Math.round(Math.random()*10);
    let array_weakPasswordGenerator = [randomNumber_Number,randomNumber_alphabet,randomNumber_specialCharacter];
    const randomArrayNumber = Math.round(Math.random()*(array_weakPasswordGenerator.length));
    console.log(randomArrayNumber+" Num")
    let randomArrayNumber_Expender = randomArrayNumber;
    let randomArrayNumber_looper = randomArrayNumber
    while(randomArrayNumber_Expender<randomArrayNumber){
        console.log(randomArrayNumber_looper)
        const weakPasswordGenerator_looper = ()=>{
            console.log(array_weakPasswordGenerator[randomArrayNumber_looper])
            randomArrayNumber_looper++
        }
        weakPasswordGenerator_looper()
        randomArrayNumber_Expender++
    }
    if(randomArrayNumber==randomArrayNumber_looper){
        
    }

};
const strongPasswordGenerator = ()=>{
    const randomNumber_strongPassword_Length = 2;
    let randomNumber_strongPassword_loopExpender =0, randomNumber_strongPassword_Array = [];
    while(randomNumber_strongPassword_loopExpender<randomNumber_strongPassword_Length){
        const strongPasswordGenerator_function =()=>{
            randomNumber_Number_StrongPassword = Math.round(Math.random()*10);
            randomNumber_strongPassword_Array.push(randomNumber_Number_StrongPassword)
            console.log(randomNumber_Number_StrongPassword)
        }
        strongPasswordGenerator_function()
        randomNumber_strongPassword_loopExpender++
    }
};
class Password{
    constructor(){

    }
    generateWeakPassword(){
        weakPasswordGenerator()
        console.log(this.Password=`${randomNumber_Number}${randomNumber_alphabet.toUpperCase()}${(randomNumber_alphabet).toLowerCase()}${randomNumber_specialCharacter}`);
    }
    generateStrongPassword(){
        strongPasswordGenerator()
        console.log(this.Password=`${randomNumber_Number}${randomNumber_alphabet.toUpperCase()}${(randomNumber_alphabet).toLowerCase()}${randomNumber_specialCharacter}`);
    }
    generateSuperStrongPassword(){

    }
}
const run = new Password("Password");
run.generateWeakPassword()