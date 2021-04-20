import React, { useState, useEffect } from 'react';
// import FetchQuestions from '../../components/questions'
import FetchQuestions from '../../components/moduleOneQuestions'
// import FetchQuestions from '../../components/moduleTwoQuestions'
// import FetchQuestions from '../../components/moduleThreeQuestions'
// import FetchQuestions from '../../components/moduleFourQuestions'
// import FetchQuestions from '../../components/moduleFiveQuestions'

// import { useParams } from 'react-router-dom'
const Quiz = () => {
	//Fetch Call we will store date
	const [id] = useState(FetchQuestions().id);
	// const {id} = useParams()
	const [questions] = useState(FetchQuestions().questions);
	const [question, setQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerClick = (specificAnswer, currentObject) => {
		if (specificAnswer === currentObject.correctAnswer) {
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
						{questions[question].answers.map((specificAnswer) => (
							<button 
								onClick={() => handleAnswerClick(specificAnswer, questions[question])}
							>
								{specificAnswer}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz