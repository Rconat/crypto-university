import React, { useState } from 'react';

const ModuleThreeQuiz = () => {
    const questions = [
        {
            questionText: "Cryptocurrency is:",
            answerOptions: [
                { answerText: 'a fully digital currency', isCorrect: true },
                { answerText: 'a currency of coins located in Silicon Valley', isCorrect: false },
                { answerText: 'physical money backerd up in the cloud', isCorrect: false },
                { answerText: 'all owned by the company that founded it', isCorrect: false },
            ],
        },
        {
            questionText: "Just like all currencies, cryptocurrency is affected by inflation",
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
            ],
        },
        {
            questionText: "How do you create Bitcoin?",
            answerOptions: [
                { answerText: 'You ask for it', isCorrect: false },
                { answerText: 'You mine it', isCorrect: true },
                { answerText: 'You find it on the web', isCorrect: false },
                { answerText: 'You dig it up', isCorrect: false },
            ],
        },
        {
            questionText: "Is Bitcoin an anonymous way to pay for things?",
            answerOptions: [
                { answerText: 'Yes - completely anonymous', isCorrect: false },
                { answerText: 'No - completely non-anonymous', isCorrect: false },
                { answerText: 'semi - if people know your address they can see what you\'ve spent', isCorrect: true },
                { answerText: 'semi - if people know your address they can see where you live', isCorrect: false },
                { answerText: '', isCorrect: false },
            ],
        },
        {
            questionText: "What is cryptography?",
            answerOptions: [
                { answerText: 'The study of ancient maps', isCorrect: false },
                { answerText: 'A method of using encryption and decryption to secure data', isCorrect: true },
                { answerText: 'A digital map to where you can find cryptocurrencies', isCorrect: false },
                { answerText: 'The structure of the network that maintains a cryptocurrency', isCorrect: false },
            ],
        },
        {
            questionText: "Who can create a new cryptocurrency?",
            answerOptions: [
                { answerText: 'Anyone with the technology', isCorrect: true },
                { answerText: 'A person or persons who stakes the overall value of the created currency with another form of currency', isCorrect: false },
                { answerText: 'A person or persons with explicit permission', isCorrect: false },
                { answerText: 'A technology company of LLC', isCorrect: false },
            ],
        },
        {
            questionText: "What can you purchase with cryptocurrency?",
            answerOptions: [
                { answerText: 'Only drugs on the black market', isCorrect: false },
                { answerText: 'Only digital items like songs, movies and games', isCorrect: false },
                { answerText: 'Any purchases made online', isCorrect: false },
                { answerText: 'Anything and everything', isCorrect: true },
            ],
        },
        {
            questionText: "Which of the following is not a benefit of cryptocurrencies over traditional currencies we/'ve been using for centuries?",
            answerOptions: [
                { answerText: 'There is a limit to how many units of the currency can exist', isCorrect: false },
                { answerText: 'There is no central operating facility holding power over users', isCorrect: false },
                { answerText: 'Transfer of funds are easilty verified and hard to forge', isCorrect: false },
                { answerText: 'You cannot lose your currency because it\'s stored on a server', isCorrect: true },
            ],
        },
        {
            questionText: "Which cryptocurrency is used to create decentralized applications?",
            answerOptions: [
                { answerText: 'Bitcoin', isCorrect: false },
                { answerText: 'Ethereum', isCorrect: true },
                { answerText: 'Litecoin', isCorrect: false },
                { answerText: 'Dogecoin', isCorrect: false },
            ],
        },
        {
            questionText: "Cryptocurrency can be used to hide criminal activity",
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
            ],
        },
    ];
}

export default ModuleThreeQuiz