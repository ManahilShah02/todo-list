#! usr/bin/env node
import inquirer from "inquirer";
import prompt from "inquirer/lib/ui/prompt.js";
// ARRAY //
// let fruitchat = ["Banana" , "Apple" , "Orange"];
// console.log(fruitchat);

//.push() //
// fruitchat.push("Melon");

//.pop() //
// fruitchat.pop();

// concat([]) // 
// fruitchat = fruitchat.concat(["Kiwi" , "Mango"]);
// console.log(fruitchat);

// LOOPS //
//while loop
// let ramadanDays = 0;

// while(ramadanDays <= 6){
//     console.log("Fasting");
//     console.log("FiveTimesPrayers");
//     ramadanDays++
// }

let todos = [];
let condition = true;

while(condition)
    {
let addTask = await inquirer.prompt(
    [
        {
            name:"Todo",
            type:"input",
            message:"What do you want to add in your Todos",

        },
        {
            name:"addmore",
            type:"confirm",
            message:"Are you sure you want to add todos",
            default:"false",
        }
    ]
)


// console.log(addTask.Todo);
todos.push(addTask.Todo);
condition = addTask.addmore;
console.log(todos);
    }