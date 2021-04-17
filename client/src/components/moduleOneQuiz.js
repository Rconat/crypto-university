const ModuleOneQuestions = () => {
    return {
        id: 'moduleOneQuestions',
        questions: [
            {
                questionText: "What is the traditional financial model we use in the US as well as most countries around the world?",
                answerOptions: [
                    { answerText: 'Centralized Currency', isCorrect: true },
                    { answerText: 'Decentralized currency', isCorrect: false },
                ],
            },
            {
                questionText: 'What is a peer-to-peer network?',
                answerOptions: [
                    { answerText: 'A social media platform such as facebook', isCorrect: false },
                    { answerText: 'A network  of computers that all share information', isCorrect: true },
                    { answerText: 'You and your social bubble', isCorrect: false },
                    { answerText: 'A network of boats that distribute currency globally', isCorrect: false },
                ],
            },
            {
                questionText: 'Who manages cryptocurrency?',
                answerOptions: [
                    { answerText: 'the government', isCorrect: false },
                    { answerText: 'banks', isCorrect: false },
                    { answerText: 'Wall Street', isCorrect: false },
                    { answerText: 'users of the cryptocurrency', isCorrect: true },
                ],
            },
            {
                questionText: 'Power is evenly distributed in a Centralized system',
                answerOptions: [
                    { answerText: 'True', isCorrect: false },
                    { answerText: 'False', isCorrect: true },
                ],
            },
            {
                questionText: 'in a decentralized system an error in one element of the process:',
                answerOptions: [
                    { answerText: 'is felt throughout the chain', isCorrect: false },
                    { answerText: 'completely halts progress until the error is corrected', isCorrect: false },
                    { answerText: 'does not affect the other elements', isCorrect: true },
                    { answerText: 'is punished for incompetence', isCorrect: false },
                ],
            },
        ]
    }
}

export default ModuleOneQuestions