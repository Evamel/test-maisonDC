import React,{useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'

export default function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) => {
            products.forEach(product => {
                if(product._id === id) product.checked = !product.checked
            })
            setProducts([...products])
        }

    // useEffect(() =>{
    //     const getProducts = async () => {
    //         const res = await axios.get('/api/products')
    //         setProducts(res.data.products)
    //     }
    //     getProducts()
    // },[setProducts])
    
    const deleteProduct = async(id, public_id) => {

        const jwt = require('jsonwebtoken')

        var e = jwt.decode(token);

        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id}, {
                headers: e
            })

            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: e
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () => {
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }


    const deleteAll = () => {
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }


    if(loading) return <div><Loading /></div>

    return (
        <>
        {
            isAdmin && <div className='delete-all'>
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete all the selection</button>
            </div>
        }
        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product} setProducts={setProducts}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            } 
        </div>
        {products.length === 0 && <Loading />}
        </>
    )
}
