const ModuleFourQuestions = () => {
    return{
        id: 'ModuleFourQuestions',
        questions : [
            {
                questionText: "How many keys does a typical crypto wallet use in a transaction?",
                answerOptions: [
                    { answerText: 'As many as the user chooses upon creation', isCorrect: false },
                    { answerText: '1 key', isCorrect: false },
                    { answerText: '2 keys', isCorrect: true },
                    { answerText: '1 key per coin being traded', isCorrect: false },
                ],
            },
            {
                questionText: "What are crypto keys used for?",
                answerOptions: [
                    { answerText: 'Unclocking a cryptocoin', isCorrect: false },
                    { answerText: 'digitally signing data', isCorrect: true },
                    { answerText: 'viewing the ledger of a cryptocurrency', isCorrect: false },
                    { answerText: 'unlocking the device your currency is stored on', isCorrect: false },
                ],
            },
            {
                questionText: "When investing in cryptocurrency and holding for a long time it is most secure to use:",
                answerOptions: [
                    { answerText: 'a \'Hot\' wallet', isCorrect: false },
                    { answerText: 'a piggy bank', isCorrect: false },
                    { answerText: 'a \'Cold\' wallet', isCorrect: true },
                    { answerText: 'A web application', isCorrect: false },
                ],
            },
            {
                questionText: "Which of the following is not a type of cryptocyrrency wallet",
                answerOptions: [
                    { answerText: 'Software wallet', isCorrect: false },
                    { answerText: 'Hardware wallet', isCorrect: false },
                    { answerText: 'Paper wallet', isCorrect: false },
                    { answerText: 'Open wallet', isCorrect: true },
                ],
            },
            {
                questionText: "If a wallet is connected to the internet it is considered:",
                answerOptions: [
                    { answerText: 'a \'Hot\' wallet', isCorrect: true },
                    { answerText: 'a \'Cold\' wallet', isCorrect: false },
                    { answerText: 'backed-up', isCorrect: false },
                    { answerText: 'insured', isCorrect: false },
                ],
            },
            {
                questionText: "Which type of wallet is considered to be \"out of date\" and \"unreliable\"",
                answerOptions: [
                    { answerText: '\'Hot\' wallets', isCorrect: false },
                    { answerText: 'paper wallets', isCorrect: true },
                    { answerText: 'hardware wallets', isCorrect: false },
                    { answerText: 'duct-tape wallets', isCorrect: false },
                ],
            },
        ]
    }
}

export default ModuleFourQuestions