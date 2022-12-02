import { prompt } from "./prompt.js";
import { isValidCredit, isValidGrade, isValidYesOrNo } from "./validations.js";

const getOneSubjectInfo = async () => {
    const name = await prompt({ text: "Enter the subject name: " });

    const credits = await prompt({
        text: "How many credits has this subject? ",
        validateAnswer: isValidCredit,
        errorMessage: "The credits must be a number between 0 and 10",
    });

    const grade = await prompt({
        text: "What was your grade? ",
        validateAnswer: isValidGrade,
        errorMessage: "The grade must be a letter between A and F",
    });

    return { name, credits: Number(credits), grade: grade.toUpperCase() };
};

const hasMoreSubjects = async () => {
    const moreSubjects = await prompt({
        text: "Do you have more subjects? (Y/n) [default: Y] ",
        validateAnswer: isValidYesOrNo,
        errorMessage: "You must enter Y or N",
        defaultAnswer: "Y",
    });
    return moreSubjects.toUpperCase() === "Y";
};

export const getCreditsAndGrade = async (name = 'pal') => {
    const subjects = [];
    console.log(`\nNow ${name}, please enter the subjects you have taken...`);
    do {
        const subject = await getOneSubjectInfo();
        subjects.push(subject);
    } while (await hasMoreSubjects());

    return subjects;
};
