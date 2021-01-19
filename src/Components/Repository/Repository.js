import React from 'react'
import './Repository.css'

const Repository = ({ name, id, privateRepo }) => {
	return (
		<div className='border col-lg-3 col-md-6 col-sm-8 pt-2 repo'>
			<p className='small'>
				<span>ID : </span> {id}
			</p>
			<p className='small'>
				<span>Name : </span> {name}
			</p>
			<p className='small'>
				<span>Private : </span>
				{privateRepo ? 'True ' : 'False '}
			</p>
		</div>
	)
}

export default Repository
