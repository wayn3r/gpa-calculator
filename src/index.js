import { calculateGrades } from "./calculate-grades.js";
import { getCreditsAndGrade } from "./get-credits-grades.js";
import { prompt } from "./prompt.js";

const main = async () => {
    console.clear();
    console.log("Welcome to the GPA Calculator!\n");
    const name = await prompt({ text: "What is your name? " });

    const subjects = await getCreditsAndGrade(name);

    const grades = calculateGrades(subjects);
    console.clear();
    console.log("GPA Calculator\n");
    console.log(`Hey ${name}, your GPA (Grade Point Average) is ${grades}\n`);
    console.log("Here is a summary of your answers:");
    console.table(subjects, ["name", "credits", "grade"]);
};

main();
