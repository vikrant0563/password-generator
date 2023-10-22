const passwordBox = document.getElementById('Password');
var button = document.getElementById('button');
var copyPassword = document.getElementById('copy');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_~+|{}[]></-=";

const allChar = upperCase + lowerCase + number + symbol;

button.addEventListener('click',function(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
 while(length > password.length){
    password += allChar[Math.floor(Math.random()*allChar.length)];
 }
 console.log(password);
 passwordBox.value = password;

});
copyPassword.addEventListener('click',function(){
    passwordBox.select();
    document.execCommand('copy');
})