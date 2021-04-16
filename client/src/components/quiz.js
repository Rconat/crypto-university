import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
		{
			questionText: "Inside which HTML element do we put the JavaScript?",
			answerOptions: [
				{ answerText: 'js', isCorrect: false },
				{ answerText: 'Javascript', isCorrect: false },
				{ answerText: 'script', isCorrect: true },
				{ answerText: 'Scripting', isCorrect: false },
			],
		},
		{
			questionText: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
			answerOptions: [
				{ answerText: 'last( )', isCorrect: false },
				{ answerText: 'push( )', isCorrect: true },
				{ answerText: 'put( )', isCorrect: false },
				{ answerText: 'pop( )', isCorrect: false },
			],
		},
		{
			questionText: 'Which built-in method returns the characters in a string beginning at the specified location?',
			answerOptions: [
				{ answerText: 'substr( )', isCorrect: true },
				{ answerText: 'getSubstring( )', isCorrect: false },
				{ answerText: 'slice( )', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of an array object adds and/or removes elements from an array?',
			answerOptions: [
				{ answerText: 'unshift( )', isCorrect: false },
				{ answerText: 'sort( )', isCorrect: false },
				{ answerText: 'toSource( )', isCorrect: false },
				{ answerText: 'splice( ', isCorrect: true },
			],
		},
	];

	const [question, setQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = question + 1;
		if (nextQuestion < questions.length) {
			setQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {question + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[question].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[question].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz