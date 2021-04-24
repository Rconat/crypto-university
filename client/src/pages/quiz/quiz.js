import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import API from '../../utils/API.js'

const Quiz = () => {
	const { id } = useParams()
	const [questions, setQuestions] = useState([]);
	const [question, setQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [loading, setLoading] = useState(true);
	const [score, setScore] = useState(0);
	useEffect(() => {
		API.getQuizById(id).then(res => {
			setQuestions(res.data.questions);
			setLoading(false)
		})
	}, [])
	const handleAnswerClick = (specificAnswer, currentObject) => {
		if (specificAnswer === currentObject.correctAnswer) {
			setScore(score + 1);
		}

		const nextQuestion = question + 1;
		if (nextQuestion < questions.length) {
			setQuestion(nextQuestion);
		} else {
			setShowScore(true);
			API.updateUser(localStorage.getItem('userId'), {
				syllabus: id,
				completed: score === questions.length,
				score: score !== 0 ? score + 1 : score,
			})
		}
	};
	return (
		<div className='app'>
			{!loading && (
				showScore ? (
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
							{questions[question].answers.map((specificAnswer, index) => (
								<button
									key={index}
									onClick={() => handleAnswerClick(specificAnswer, questions[question])}
								>
									{specificAnswer}
								</button>
							))}
						</div>
					</>
				)
			)}
		</div>
	);
}

export default Quiz