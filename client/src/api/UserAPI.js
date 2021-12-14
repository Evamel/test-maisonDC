import {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    const [callback, setCallback] = useState(false)
    

    useEffect(() =>{
        if(token){
            const jwt = require('jsonwebtoken')

            var e = jwt.decode(token);

            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: e

                    })
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                    setCart(res.data.cart)
                    console.log(res)


                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
        }
    },[token]) 


    // useEffect(() =>{
    //     if(token){
    //         const getUser = async () =>{
    //             try {
    //                 const res = await axios.get('/user/infor', {
    //                     headers: {Authorization: token}
    //                 })
    //                 setIsLogged(true)
    //                 res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
    //                 console.log(res)
    //             } catch (err) {
    //                 alert(err.response.data.msg)
    //             }
    //         }

    //         getUser()
    //     }
    // },[token])

    useEffect(() => {
        if(token){
            const jwt = require('jsonwebtoken')

            var e = jwt.decode(token);
            
            const getHistory = async() =>{
                const res = await axios.get('/user/history', {
                    headers: e
                })
                setHistory(res.data)
            }
            getHistory()
        }
    },[token, callback])

    const addCart = async (product) =>{
        if(!isLogged) return alert("please login to continue buying")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            const jwt = require('jsonwebtoken')

            var e = jwt.decode(token);

            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]},{
                headers: e
            })

        }else{
            alert("this product has been added to cart.")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory],
        callback: [callback, setCallback]
    }
}
