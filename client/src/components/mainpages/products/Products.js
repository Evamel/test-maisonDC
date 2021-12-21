import React,{useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
// import axios from 'axios'

export default function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback


    // useEffect(() =>{
    //     const getProducts = async () => {
    //         const res = await axios.get('/api/products')
    //         setProducts(res.data.products)
    //     }
    //     getProducts()
    // },[setProducts])
    

    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} token={token} callback={callback} setCallback={setCallback} />
                })
            } 
        </div>
        {products.length === 0 && <Loading />}
        </>
    )
}
