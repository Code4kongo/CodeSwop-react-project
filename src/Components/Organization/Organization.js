import React from 'react'
import './Organization.css'

const Organization = ({ login, id, description }) => {
	return (
		<div className='border col-lg-3 col-md-6 col-sm-8 pt-2 org'>
			<p className='small'>
				<span>ID : </span> {id}
			</p>
			<p className='small'>
				<span>Name : </span> {login}
			</p>
			<p className='small'>
				<span>Description : </span> {description}
			</p>
		</div>
	)
}

export default Organization
