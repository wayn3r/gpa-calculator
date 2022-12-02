import readline from "readline";

export const prompt = async ({
    text,
    validateAnswer,
    errorMessage = "Invalid answer!",
    defaultAnswer,
}) => {
    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        input.question(text, (answer) => {
            input.close();
            handleAnswer(
                answer || defaultAnswer,
                { text, validateAnswer, errorMessage, defaultAnswer },
                resolve
            );
        });
    });
};

const handleAnswer = (answer, args, resolve) => {
    if (!answer) {
        console.warn("\nYou must enter a value!");
        return prompt(args).then(resolve);
    }
    const { validateAnswer, errorMessage } = args;
    if (validateAnswer && !validateAnswer(answer)) {
        console.error('\n'+errorMessage);
        return prompt(args).then(resolve);
    }

    resolve(answer);
};
