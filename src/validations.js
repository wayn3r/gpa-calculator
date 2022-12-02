export const isNumber = (value) => !isNaN(Number(parseInt(value)));

export const isValidYesOrNo = (answer) => {
    const validAnswers = ["Y", "N"];
    return validAnswers.includes(answer.toUpperCase());
};

export const isValidGrade = (grade) => {
    const validGrades = ["A", "B", "C", "D", "E", "F"];
    return validGrades.includes(grade.toUpperCase());
};

export const isValidCredit = (credit) => {
    return isNumber(credit) && Number(credit) >= 0 && Number(credit) <= 10;
};
