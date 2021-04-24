const ModuleOneQuestions = () => {
    return [
        {
            questionText: "What is the traditional financial model we use in the US as well as most countries around the world?",
            correctAnswer: "Centralized Currency",
            answers: [
                "Centralized Currency",
                "Decentralized currency"
            ],
        },
        {
            questionText: 'What is a peer-to-peer network?',
            correctAnswer: "A network of computers that all share information",
            answers: [
                "A social media platform such as facebook",
                "A network of computers that all share information",
                "You and your social bubble",
                "A network of boats that distribute currency globally"
            ],
        },
        {
            questionText: 'Who manages cryptocurrency?',
            correctAnswer: "users of the cryptocurrency",
            answers: [
                'the government',
                'banks',
                'Wall Street',
                'users of the cryptocurrency'
            ],
        },
        {
            questionText: 'Power is evenly distributed in a Centralized system',
            correctAnswer: "False",
            answers: [
                'True',
                'False'
            ],
        },
        {
            questionText: 'in a decentralized system an error in one element of the process:',
            correctAnswer: "does not affect the other elements",
            answers: [
                'is felt throughout the chain',
                'completely halts progress until the error is corrected',
                'does not affect the other elements',
                'is punished for incompetence'
            ],
        },
    ]
}

module.exports = ModuleOneQuestions;