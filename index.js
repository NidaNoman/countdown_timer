#!/usr/bin/env node
import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    name: "seconds",
    type: "number",
    message: "Enter countdown duration in seconds!"
});
let { seconds } = userInput;
if (seconds != 0) {
    console.log(`starting countdown for ${seconds} seconds....`);
    startcountdownfun(seconds);
}
else {
    console.log(`please enter a number greater than 0`);
}
function startcountdownfun(seconds) {
    const currentTime = Date.now();
    let userenteredtime = seconds * 1000;
    let totaltime = currentTime + userenteredtime;
    const timer = setInterval(() => {
        let currentTime = Date.now();
        const remainingTime = totaltime - currentTime;
        if (remainingTime >= 0) {
            process.stdout.write(`\rtime remaining ${Math.floor(remainingTime / 1000)}seconds`);
        }
        else {
            clearInterval(timer);
            console.log(`\nTime up!`);
            console.log(`Thank you for using our countdown Timer App!`);
        }
    }, 1000);
}
