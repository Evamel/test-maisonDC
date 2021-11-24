import React, {useState, useEffect} from 'react'

export default function userAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() =>{
        if(token){
            
        }
    },[token])

    return (
        <div>
            
        </div>
    )
}