const ModuleFiveQuestions = () => {
    return{
        id: 'ModuleFiveQuestions',
        questions: [
            {
                questionText: "Which of the following is NOT a place you can purchase cryptocurrency?",
                answerOptions: [
                    { answerText: 'Bitcoin ATM', isCorrect: false },
                    { answerText: 'A cryptocurrency exchange', isCorrect: false },
                    { answerText: 'Your bank', isCorrect: true },
                    { answerText: 'A P2P Exchange', isCorrect: false },
                ],
            },
            {
                questionText: "If you can safely purchase the currency there is less risk involved in the value dropping?",
                answerOptions: [
                    { answerText: 'True', isCorrect: false },
                    { answerText: 'False', isCorrect: true },
                ],
            },
        ]
    }
}

export default ModuleFiveQuestions