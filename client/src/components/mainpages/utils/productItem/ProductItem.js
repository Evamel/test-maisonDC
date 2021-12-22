import React from 'react'
import BtnRender from './BtnRender'
// import axios from 'axios'
// import Loading from '../loading/Loading'

export default function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    // const [loading, setLoading] = useState(false)

    // const deleteProduct = async() => {
    //     const jwt = require('jsonwebtoken')

    //     var e = jwt.decode(token);

    //     try {
    //         setLoading(true)
    //         const destroyImg = axios.post('/api/destroy', {public_id: product.images.public_id}, {
    //             headers: e
    //         })

    //         const deleteProduct = axios.delete(`/api/products/${product._id}`, {public_id: product.images.public_id}, {
    //             headers: e
    //         })

    //         await destroyImg
    //         await deleteProduct
    //         setLoading(false)
    //         setCallback(!callback)

    //     } catch (err) {
    //         alert(err.response.data.msg)
    //     }
    // }

    // const handleCheck = (id) => {
    //     console.log(id)
    //     // let newProduct = [...product]
    //     // newProduct.checked = !newProduct.checked
    //     // setProducts(newProduct)
    // }

    // if(loading) return <div className='product_card'><Loading /></div>

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked} onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt=""/>

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>{product.price}€</span>
                <p>{product.description}</p>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}
