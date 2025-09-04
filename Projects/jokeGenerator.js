// Ramdom joke generator using API
// https://official-joke-api.appspot.com/jokes/random


import https from "https";
import chalk from "chalk";

const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/jokes/random";
    
    https.get(url, (res)=> {
        let data = "";
        res.on('data', (chunk)=> {
            data += chunk
        });

        res.on('end', ()=> {
            const joke = JSON.parse(data);
            console.log(chalk.yellow("Here is a ramdon joke:"));
            console.log(chalk.red(joke.setup));
            console.log(chalk.blue.bgGreen.bold(joke.punchline));
        });
    }).on('error', (err)=> {
        console.log("Error: " + err.message);
    })

} 

getJoke();