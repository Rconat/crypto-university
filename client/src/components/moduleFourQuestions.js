const ModuleFourQuestions = () => {
    return{
        id: 'ModuleFourQuestions',
        questions : [
            {
                questionText: "How many keys does a typical crypto wallet use in a transaction?",
                correctAnswer: "2 keys",
                answers: [
                    'As many as the user chooses upon creation',
                    '1 key',
                    '2 keys',
                    '1 key per coin being traded',
                ],
            },
            {
                questionText: "What are crypto keys used for?",
                correctAnswer: "digitally signing data",
                answers: [
                    'Unclocking a cryptocoin',
                    'digitally signing data',
                    'viewing the ledger of a cryptocurrency',
                    'unlocking the device your currency is stored on'
                ],
            },
            {
                questionText: "When investing in cryptocurrency and holding for a long time it is most secure to use:",
                correctAnswer: "a \'Cold\' wallet",
                answers: [
                    'a \'Hot\' wallet',
                    'a piggy bank',
                    'a \'Cold\' wallet',
                    'A web application'
                ],
            },
            {
                questionText: "Which of the following is not a type of cryptocyrrency wallet",
                correctAnswer: "Open wallet",
                answers: [
                    'Software wallet',
                    'Hardware wallet',
                    'Paper wallet',
                    'Open wallet'
                ],
            },
            {
                questionText: "If a wallet is connected to the internet it is considered:",
                correctAnswer: "a \'Hot\' wallet",
                answers: [
                    'a \'Hot\' wallet',
                    'a \'Cold\' wallet', 
                    'backed-up',
                    'insured'
                ],
            },
            {
                questionText: "Which type of wallet is considered to be \"out of date\" and \"unreliable\"",
                correctAnswer: "paper wallets",
                answers: [
                    '\'Hot\' wallets',
                    'paper wallets',
                    'hardware wallets',
                    'duct-tape wallets'
                ],
            },
        ]
    }
}

export default ModuleFourQuestions