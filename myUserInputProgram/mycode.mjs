import PromptSync from "prompt-sync";

const prompt = PromptSync();

var name = prompt("What is your name?");
console.log(name);

var  num = prompt("Enter your number");
console.log("Your number + 4 =");

console.log(Number(num) + 4);


