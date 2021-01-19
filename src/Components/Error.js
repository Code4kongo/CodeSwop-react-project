import React from 'react'

const Error = props => {
    return (
        <div className="alert alert-danger text-center">
            {props.children}
        </div>
    )
}

export default Error
