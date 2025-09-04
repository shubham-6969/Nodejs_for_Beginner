// Real time Currency Converter App

import https from "https";
import readline from "readline";
import chalk from "chalk";

// creating interface that can help in read and write
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// API details
const apikey = `0bf5c56c2497a6f5cf2a95f8`; 
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

// fetching url data
https.get(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question(
        chalk.yellow("Enter the target Currency (e.g., INR, EUR, YEN, DINAR): "),
        (currency) => {
          const rate = rates[currency.toUpperCase()];
          if (rate) {
            console.log(
              chalk.bgBlue(
                `${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency.toUpperCase()}`
              )
            );
          } else {
            console.log(chalk.red("Invalid Currency Code"));
          }
          rl.close();
        }
      );
    });
  });
});
