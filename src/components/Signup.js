import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAsync } from '../features/users'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
		const dispatch = useDispatch();
    const navigate = useNavigate()

		const [lName, setLName] = useState('');
		const [fName, setFName] = useState('');
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		//define a function for submitting that takes in the event object as a parameter; this function will...
		const onSubmit = (e)=> {
			//...prevent the submit from loading a new page
			e.preventDefault();
			//...verify that all *required* fields are filled out
			if(!fName || !lName || !email || !password) {
				alert('All required fields must be completed: first name, last name, email, and password');
				return
			}

			//...create a new object from input fields (stored from the form as state variables)
			const newUser = { fName, lName, email, password, type: 'customer'}
			dispatch(addUserAsync(newUser))
        navigate("/login");

			//...and reset the form
			// setFirstName('');
			// setLastName('');
			// setEmail('');
			// setGPA('');
			// setImageUrl('');
		}

  return(
    <form
		  className='add-user-form'
			onSubmit={onSubmit}
		>
			<div className='form-control'>
				<label>First Name: </label>
				<input
				  type='text'
					placeholder='**REQUIRED**'
					value={fName}
					onChange={(e)=> setFName(e.target.value)}
			  />
			</div>
			<div className='form-user-control'>
				<label>Last Name:</label>
				<input
				  type='text'
					placeholder='**REQUIRED**'
					value={lName}
					onChange={(e)=> setLName(e.target.value)}
				/>
			</div>
			<div className='form-user-control'>
				<label>Email: </label>
				<input
				  type='text'
					placeholder='**REQUIRED**'
					value={email}
					onChange={(e)=> setEmail(e.target.value)}
				/>
			</div>
			<div className='form-user-control'>
				<label>Password:</label>
				<input
				type='text'
				placeholder='**REQUIRED**'
				value={password}
				onChange={(e)=> setPassword(e.target.value)}
			/>
			</div>

			{/*...and a submit button down at the very bottom🔘 */}
			<input
			  type='submit'
				value='Save'
			/>
		</form>
  )
}

export default Signup;
