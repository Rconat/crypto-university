import React, { useEffect, useState } from 'react'
import './account.css'
import API from '../../utils/API'

const Account = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [submitBtn, setSubmitBtn] = useState(null);
	const [update, setUpdate] = useState('')

	useEffect(() => {
		if (!!firstName && !!lastName) {
			API.updateUser(localStorage.getItem('userId'), {
				firstName,
				lastName,
			}).then(() => {
				setUpdate('Successfully updated')
			})
		}
	}, [submitBtn]);
	return (
		<div className="container dashboard-container account-container">
			<h1 className="heading">Update Profile Name</h1>
			<p className="account-text">The name entered below will be shown on your diploma</p>
			<br />
			<div className="account-alert">
			{update && <alert className="alert alert-success" role="alert">{update}</alert>}
			</div>
			<form className="form account-form">
				<input type="text" id="firstName" placeholder="Enter first name" onChange={(event) => {
					event.preventDefault()
					setFirstName(event.target.value)
				}} />
				<input type="text" id="lastName" placeholder="Enter last name" onChange={(event) => {
					event.preventDefault()
					setLastName(event.target.value)
				}} />
				<button type="button" id="submit" name="submit" onClick={(event) => {
					event.preventDefault()
					setSubmitBtn(+new Date())
				}}>Update</button>
			</form>
		</div>
	)
}

export default Account