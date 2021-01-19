import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from '../Components/UserCard/UserCard'
import Error from '../Components/Error'


const  HomePage = () => {
    const [ users, setUsers ] = useState([])
    const [ inputValue, setinputValue ] = useState("")
    const [ filteredUsers, setFilteredUsers ] = useState([])
    const [ error, setError ] = useState(false)

    useEffect(() => {
        (async function getUsers(){
           try {
            const users = await axios.get('https://api.github.com/users')
            setUsers(users.data)
           } catch(error){
               setError(true)
           }
        })()
    }, [])

    const handleSearch = event => {
        event.preventDefault()
        const resultFilteredUsers = users.filter(user => user.login.indexOf(event.target.value) !== -1)
        setFilteredUsers(resultFilteredUsers)
    }

    return (
        <div className="container">
            <div className="row">
            <form className="col-9 justify-content-center m-auto my-5">
                <div className="input-group mb-3">  
                    <input 
                        type="text" 
                        className="form-control"
                        style={{textAlign : 'center'}}
                        placeholder="Enter username..." 
                        value={inputValue} 
                        onChange={  event => {
                            handleSearch(event)
                            setinputValue(event.target.value)
                    }}/>
                </div>
            </form>
            </div>
            <div className="container my-5 pt-3">
                <div className="row justify-content-center">
                    {   error ? <Error>An error occured when loading data</Error> : 
                        filteredUsers.length <1 ?  
                            users.map(user =>  {  
                                const {login, id,avatar_url} = user
                                return ( 
                                    <UserCard key={id}
                                            login = {login}
                                            id = {id}
                                            avatar_url = { avatar_url}
                                        />
                                )
                                }):  

                        filteredUsers.map(user =>  {  
                            const {login, id,avatar_url} = user
                            return ( 
                                <UserCard key={id}
                                        login = {login}
                                        id = {id}
                                        avatar_url = { avatar_url}
                                       
                                    />
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default HomePage


/*
<ul>
                
            </ul>*/