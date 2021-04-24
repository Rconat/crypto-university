import React, { useEffect, useState } from 'react'
import './account.css'
import API from '../../utils/API'

const Account = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [submitBtn, setSubmitBtn] = useState(null);
	useEffect(() => {
		if (!!firstName && !!lastName) {
			API.updateUser(localStorage.getItem('userId'), {
				firstName,
				lastName,
			}).then(() => {
				console.log('Successful updated')
			})
		}
	}, [submitBtn]);
	return (
		<div className="container">
			<div className="row gutters">
				<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
					<div className="card h-100">
						<div className="card-body">
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<h6 className="mb-3 text-primary">Personal Details</h6>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="firstName">First Name</label>
										<input type="text" className="form-control" id="firstName" placeholder="Enter first name" onChange={(event) => {
											event.preventDefault()
											setFirstName(event.target.value)
										}}/>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="lastName">Last Name</label>
										<input type="text" className="form-control" id="lastName" placeholder="Enter last name" onChange={(event) => {
											event.preventDefault()
											setLastName(event.target.value)
										}}/>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input type="email" className="form-control" id="email" placeholder="Enter email ID" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="phone">Phone</label>
										<input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="website">Website URL</label>
										<input type="url" className="form-control" id="website" placeholder="Website url" />
									</div>
								</div>
							</div>
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<h6 className="mb-3 text-primary">Address</h6>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="Street">Street</label>
										<input type="name" className="form-control" id="Street" placeholder="Enter Street" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="ciTy">City</label>
										<input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="sTate">State</label>
										<input type="text" className="form-control" id="sTate" placeholder="Enter State" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label htmlFor="zIp">Zip Code</label>
										<input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
									</div>
								</div>
							</div>
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="text-right">
										<button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
										<button type="button" id="submit" name="submit" className="btn btn-primary" onClick={(event) => {
											event.preventDefault()
											setSubmitBtn(+new Date())
										}}>Update</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Account