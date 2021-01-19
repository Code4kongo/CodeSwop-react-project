import React, { useState, useEffect } from 'react'
import { getUserData } from '../github-api'
import axios from 'axios'
import Organization from '../Components/Organization/Organization'
import Loader from '../Components/Loader/Loader'
import Error from '../Components/Error'

const UserOrgPage = (props) => {
	const userId = props.match.params.userId

	const [user, setUser] = useState({
		login: '',
		id: '',
		avatar_url: '',
	})
	const [organizations, setOrganizations] = useState([])
	const [error, setError] = useState(false)

	useEffect(() => {
		;(async function getUserInfo() {
			try {
				const res = await axios.get(`https://api.github.com/users/${userId}`)
				const { login, id, avatar_url } = res.data
				setUser(() => {
					return { ...user, login, avatar_url, id }
				})

				const userData = getUserData(login)
				const orgInfo = await userData
				setOrganizations(orgInfo.orgs)
			} catch (error) {
				setError(true)
			}
		})()
	}, [user, userId])

	return (
		<div className='container my-2'>
			{error ? (
				<Error>An Error occured while loading the user data</Error>
			) : (
				<>
					<div className='row justify-content-center my-2'>
						<div className='col-6 text-center'>
							<img
								src={user.avatar_url}
								alt='user_profil'
								width='50%'
								className='rounded'
							/>
						</div>
					</div>
					<hr></hr>
					<div className='row justify-content-center mt-5'>
						<div className='col-12 text-center mb-3'>
							<h3> List of organizations </h3>
						</div>
						<div className='row justify-content-center'>
							{organizations.length < 1 ? (
								<div className='alert alert-info text-center'>
									No Organization{' '}
								</div>
							) : null}
							{organizations.length < 1 ? (
								<Loader />
							) : (
								organizations.map((organization, index) => {
									const { login, id, description } = organization
									return (
										<Organization
											key={index}
											login={login}
											id={id}
											description={description}
										/>
									)
								})
							)}
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default UserOrgPage
