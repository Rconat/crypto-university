const ModuleTwoQuestions = () => {
    return{
        id: 'ModuleTwoQuestions',
        questions : [
            {
                questionText: "What is data hashing",
                correctAnswer: "translating a large set of data into a string of letter and numbers",
                answers: [
                    'translating a large set of data into a string of letter and numbers',
                    'pushing false data into the chain',
                    'destroying data so it become unusable',
                    'searching for crypto prices online',
                ],
            },
            {
                questionText: "who can join the peer-to-peer network and keep track of the ledger for a crypto currency?",
                correctAnswer: "Anyone that wants to",
                answers: [
                    'Employees at the company that maintains the cryptocurrency',
                    'Those who are invested in the crypto currency',
                    'The brokers that buy and sell crypto currency',
                    'Anyone that wants to',
                ],
            },
            {
                questionText: "What happens to blocks after they are calculated",
                correctAnswer: "They are added to the following block",
                answers: [
                    'They are discarded',
                    'They are locked with an encrypted password',
                    'They are added to the following block',
                    'They are removed and corrupted so that they cannot be traced'
                ],
            },
            {
                questionText: "What is the first block in a blockchain called?",
                correctAnswer: "Genesis Block",
                answers: [
                    'The First Block',
                    'Original Sin',
                    'Genesis Block',
                    'Creation Block',
                    'Launch Block'
            },
            {
                questionText: "What is the algorithm that Bitcoin uses in it's blockchain?",
                correctAnswer: "Sha256",
                answers: [
                    'Buchberger\'s Algorithm',
                    'Union-find Algorithm',
                    'Sha256',
                    'The algorithm is hidden for security'
                ],
            },
            {
                questionText: "What does immutable mean?",
                correctAnswer: "Cannot be changed",
                answers: [
                    'Cannot be silenced',
                    'Cannot be changed',
                    'Cannot be contained',
                    'Cannot be regulated'
                ],
            },
            {
                questionText: "Who first implemented proof-of-work to be used in cryptocurrency?",
                correctAnswer: "Satoshi Nakamoto",
                answers: [
                    'Bill Gates',
                    'Elon Musk',
                    'Jonathan Proofeld',
                    'Satoshi Nakamoto'
                ],
            },
            {
                questionText: "Blockchain technology is only used in cryptocurrency",
                correctAnswer: "False",
                answers: [
                    'True',
                    'False'
                ],
            },
            {
                questionText: "Due to how a blockchain is structured, it is used:",
                correctAnswer: "to track information as it changes over time",
                answers: [
                    'to track information as it changes over time',
                    'to tell who currently is holding data regardless of where it came from',
                    'to remove precious sets of data',
                    'to predict future sets of data based on previous events'
                ],
            },
            {
                questionText: "Because blockchain ledgers are accessible by anyone, it is easier for criminals to get access to and forge data on the block chain",
                correctAnswer: "False",
                answers: [
                    'True',
                    'False'
                ],
            },
        ]
    }
}

export default ModuleTwoQuestions