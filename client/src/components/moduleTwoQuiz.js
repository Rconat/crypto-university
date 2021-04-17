import React, { useState } from 'react';

const ModuleOneQuiz = () => {
    const questions = [
        {
            questionText: "What is data hashing",
            answerOptions: [
                { answerText: 'translating a large set of data into a string of letter and numbers', isCorrect: true },
                { answerText: 'pushing false data into the chain', isCorrect: false },
                { answerText: 'destroying data so it become unusable', isCorrect: false },
                { answerText: 'searching for crypto prices online', isCorrect: false },
            ],
        },
        {
            questionText: "who can join the peer-to-peer network and keep track of the ledger for a crypto currency?",
            answerOptions: [
                { answerText: 'Employees at the company that maintains the cryptocurrency', isCorrect: false },
                { answerText: 'Those who are invested in the crypto currency', isCorrect: false },
                { answerText: 'The brokers that buy and sell crypto currency', isCorrect: false },
                { answerText: 'Anyone that wants to', isCorrect: true },
            ],
        },
        {
            questionText: "What happens to blocks after they are calculated",
            answerOptions: [
                { answerText: 'They are discarded', isCorrect: false },
                { answerText: 'They are locked with an encrypted password', isCorrect: false },
                { answerText: 'They are added to the following block', isCorrect: true },
                { answerText: 'They are removed and corrupted so that they cannot be traced', isCorrect: false },
            ],
        },
        {
            questionText: "What is the first block in a blockchain called?",
            answerOptions: [
                { answerText: 'The First Block', isCorrect: false },
                { answerText: 'Original Sin', isCorrect: false },
                { answerText: 'Genesis Block', isCorrect: true },
                { answerText: 'Creation Block', isCorrect: false },
                { answerText: 'Launch Block', isCorrect: false },
            ],
        },
        {
            questionText: "What is the algorithm that Bitcoin uses in it's blockchain?",
            answerOptions: [
                { answerText: 'Buchberger\'s Algorithm', isCorrect: false },
                { answerText: 'Union-find Algorithm', isCorrect: false },
                { answerText: 'Sha256', isCorrect: true },
                { answerText: 'The algorithm is hidden for security', isCorrect: false },
            ],
        },
        {
            questionText: "What does immutable mean?",
            answerOptions: [
                { answerText: 'Cannot be silenced', isCorrect: false },
                { answerText: 'Cannot be changed', isCorrect: true },
                { answerText: 'Cannot be contained', isCorrect: false },
                { answerText: 'Cannot be regulated', isCorrect: false },
            ],
        },
        {
            questionText: "Who first implemented proof-of-work to be used in cryptocurrency?",
            answerOptions: [
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: false },
                { answerText: 'Jonathan Proofeld', isCorrect: false },
                { answerText: 'Satoshi Nakamoto', isCorrect: true },
            ],
        },
        {
            questionText: "Blockchain technology is only used in cryptocurrency",
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
            ],
        },
        {
            questionText: "Due to how a blockchain is structured, it is used:",
            answerOptions: [
                { answerText: 'to track information as it changes over time', isCorrect: true },
                { answerText: 'to tell who currently is holding data regardless of where it came from', isCorrect: false },
                { answerText: 'to remove precious sets of data', isCorrect: false },
                { answerText: 'to predict future sets of data based on previous events', isCorrect: false },
            ],
        },
        {
            questionText: "Because blockchain ledgers are accessible by anyone, it is easier for criminals to get access to and forge data on the block chain",
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
            ],
        },
    ];
}