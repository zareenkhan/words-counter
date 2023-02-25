#! /usr/bin/env node
import inquirer from "inquirer";
const wordCount = (string) => {
    const words = string.trim().split(/\s+/g);
    console.log("total words in the pare are: " + words.length);
};
const getInput = async () => {
    const userInput = await inquirer.prompt([{
            type: "input",
            name: "para",
            message: "Enter yours para: "
        }]);
    await wordCount(userInput.para);
};
async function startAgain() {
    do {
        await getInput();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to again counts words? Press Y or N",
        });
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "Yes");
}
await startAgain();
