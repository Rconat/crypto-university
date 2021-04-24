import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import API from '../../utils/API.js'

const Quiz = () => {
	// syllabus id returns current syllabus which contains questions
	const { id } = useParams()
	// full array of data (questions)
	const [questions, setQuestions] = useState([]);
	// current position of the array 
	const [question, setQuestion] = useState(0);
	// score boolean check
	const [showScore, setShowScore] = useState(false);
	// when the request to get the QuizById is loading, hold off from rendering HTML
	const [loading, setLoading] = useState(true);
	// actual score during each quiz
	const [score, setScore] = useState(0);
	
	// grabbing the quiz by id association
	useEffect(() => {
		API.getQuizById(id).then(res => {
			setQuestions(res.data.questions);
			setLoading(false)
		})
	}, [])

	// check to see if the answer selected is the correct answer; increase score count
	const handleAnswerClick = (specificAnswer, currentObject) => {
		if (specificAnswer === currentObject.correctAnswer) {
			setScore(score + 1);
		}

		// dynamically checks the quiz length the user is on and shows the next question if there is one
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