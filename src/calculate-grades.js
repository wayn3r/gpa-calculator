const getGradeValue = (grade) => {
    const grades = {
        A: 4,
        B: 3,
        C: 2,
        D: 1,
        E: 0,
        F: 0,
    };
    return grades[grade] ?? 0;
};

export const calculateGrades = (subjects) => {
    // calculate the gpa
    const totalCredits = subjects.reduce((total, subject) => {
        return total + subject.credits;
    }, 0);
    const totalGrades = subjects.reduce((total, subject) => {
        return total + subject.credits * getGradeValue(subject.grade);
    }, 0);
    const gpa = totalGrades / totalCredits;
    return gpa.toFixed(2);
};
