import React, {useState, useContext} from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'Enter description here',
    content: 'Give information about the content here',
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

    const handleUpload = async i => {
        const jwt = require('jsonwebtoken')

        var e = jwt.decode(token);

        i.preventDefault()

        try {
            if(!isAdmin) return alert("You are not an admin")
            const file = i.target.files[0]
            
            if(!file) return alert("This file does not exist.")

            if(file.size > 1024 * 1024) return alert("Size too large")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') return alert("File format is incorrect")

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

    const styleUpload = {
        display: images ? "block" : "none"
    }

    return (
        <div className='create_product'>
            <div className='upload'>
                <input type="file" name="file" id="file_up" onChange={handleUpload} />
                {
                    loading ? 
                    <div id="file_img"><Loading /></div> 
                    : 
                    <div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span>X</span>
                    </div>
                }
                
            </div>
            <form>
                <div className='row'>
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required value={product.product_id} />
                </div>

                <div className='row'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required value={product.title} />
                </div>

                <div className='row'>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required value={product.price} />
                </div>

                <div className='row'>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required value={product.description} rows="5"/>
                </div>

                <div className='row'>
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required value={product.content} row="7" />
                </div>

                <div className='row'>
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={product.category}>
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value ={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type='submit'>Create this product</button>
                
            </form>
        </div>
    )
}
