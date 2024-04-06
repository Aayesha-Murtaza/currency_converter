#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright('Please answer the following questions: '));
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GRP: 0.76,
    INR: 74.57,
    PKR: 277.53,
};
let user_answer = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select the currency you want to convert from: ",
        choices: ["USD", "EUR", "GRP", "INR", "PKR"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select the currency you want to convert to: ",
        choices: ["USD", "EUR", "GRP", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to convert:",
    },
]);
let fromAmount = currency[user_answer.fromCurrency];
let toAmount = currency[user_answer.toCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertAmount = (baseAmount * toAmount).toFixed(2);
console.log("-------------------------");
console.log(`${amount} ${user_answer.fromCurrency} = ${convertAmount} ${user_answer.toCurrency}`);
