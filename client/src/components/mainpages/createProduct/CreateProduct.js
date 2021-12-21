import React, {useState, useContext} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useNavigate} from 'react-router-dom'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'this is the description for create product',
    content: 'this is the content',
    category: ''
}

export default function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const navigate = useNavigate();


    const handleUpload = async i =>{
        const jwt = require('jsonwebtoken')

        var e = jwt.decode(token);
        i.preventDefault()
        try {
            if(!isAdmin) return alert("you're not an admin")
            const file = i.target.files[0]
            
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) //1mo
                return alert("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') //1mo
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', e}
            })
            setLoading(false)
            setImages(res.data)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () =>{
        const jwt = require('jsonwebtoken')

        var e = jwt.decode(token);
        try {
            if(!isAdmin) return alert("you're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images.public_id}, {
                headers: e
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = i => {
        const {name, value} = i.target
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async i => {
        const jwt = require('jsonwebtoken')

        var e = jwt.decode(token);

        i.preventDefault()
        try {
            if(!isAdmin) return alert("you're not an admin")
            if(!images) return alert("No image upload")

            // await axios.post('/api/products', {...product, images}, {
            //     headers: e
                const res = await axios.post('/api/products', {...product, images}, {
                    headers: e

                    
            })
            
            alert(res.data.msg)

            setImages(false)
            setProduct(initialState)
            navigate("/")
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ?   <div id="file_img"><Loading/></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>x</span>
                    </div>
                }
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                    value={product.product_id} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                    value={product.title} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                    value={product.content} rows="7" onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput}>
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}
