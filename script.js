

let userInput = prompt("Username: ");
let passInput = prompt("Password: ");

const userName = "martin"
const passWord = "20_martin";

if(userInput == userName && passInput == passWord || userInput == "user" && passInput == "admin"){
    console.log("You have access!");
}
else{
    console.log("Access denied!");
}