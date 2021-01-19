import React, { useState, useEffect } from 'react'
import { getRepos } from '../github-api'
import axios from 'axios'
import Repository from '../Components/Repository/Repository'
import Loader from '../Components/Loader/Loader'
import Error from '../Components/Error'

const UserRepoPage = (props) => {
	const userId = props.match.params.userId

	const [user, setUser] = useState({
		login: '',
		id: '',
		avatar_url: '',
	})
	const [repositories, setRepositories] = useState([])
	const [error, setError] = useState(false)

	useEffect(() => {
		;(async function getUserRepos() {
			try {
				const res = await axios.get(`https://api.github.com/users/${userId}`)
				const { login, id, avatar_url } = res.data
				setUser(() => {
					return { ...user, login, avatar_url, id }
				})
				const repositories = getRepos(login)
				const userRepo = await repositories
				setRepositories(userRepo)
			} catch (error) {
				setError(error)
			}
		})()
	}, [user, userId])

	return (
		<div className='container  my-3'>
			{error ? (
				<Error> An error occured while loading the user repositories </Error>
			) : (
				<>
					<div className='row justify-content-center'>
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
							<h3> List of repositories </h3>
						</div>
						<div className='row justify-content-center'>
							{repositories.length < 1 ? (
								<div className='alert alert-info text-center'>
									No repository{' '}
								</div>
							) : null}

							{repositories.length < 1 ? (
								<Loader />
							) : (
								repositories.map((repository, index) => {
									const { id, name } = repository
									return (
										<Repository
											key={index}
											id={id}
											name={name}
											privateRepo={repository.private}
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

export default UserRepoPage

/*
    
*/
