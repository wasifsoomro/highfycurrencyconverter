#!/usr/bin/env node
import inquirer from "inquirer"

interface CurrencyRates {
    USD: number;
    PKR: number;
    EURO: number;
    SAU: number;
    AED: number;
}
let currencies: CurrencyRates  = {
    USD: 1,
    PKR: 280,
    EURO: 0.94,
    SAU: 3.75,
    AED: 3.67
  };
async function currencyConverter() {
  let answer = await inquirer.prompt([{
      type: "list",
      name: "from",
      message: "Choose Currency you want to Convert from",
      choices: ["USD", "PKR", "EURO", "SAU", "AED"]
    },
    {
      type: "list",
      name: "to",
      message: "Choose currency you want to convert into",
       choices: ["USD", "PKR", "EURO", "SAU", "AED"]
    },
    {
      type: "input",
      name: "EnterAmount",
      message: "Enter Amount ",
    }
   ]);
   
   let amountFrom = currencies[answer.from as keyof CurrencyRates]
   let amountTo = currencies[answer.to as keyof CurrencyRates]
   let amount = parseFloat(answer.EnterAmount)
   let convertedAmount:number = (amount/amountFrom) * amountTo;
   
   
   console.log(convertedAmount.toFixed(2))
   
   console.log(amountFrom)
   console.log(amountTo)
   console.log(amount)
}
currencyConverter();