import React, {useState, useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'

export default function Categories() {
    const state = useContext(GlobalState)
    const [categories, setCategories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callback, setcallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    
    const createCategory = async i =>{

        const jwt = require('jsonwebtoken')

        var e = jwt.decode(token);

        i.preventDefault()
        
        try {
            if(onEdit){
                const res = await axios.put(`/api/category/${id}`, {name: category}, {
                    headers: e
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('/api/category', {name: category}, {
                    headers: e
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setcallback(!callback)

        }catch (err){
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name) => {
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }


    const deleteCategory = async id => {

        const jwt = require('jsonwebtoken')

        var e = jwt.decode(token);

        try {
            const res = await axios.delete(`/api/category/${id}`, {
                headers: e
            })
            alert(res.data.msg)
            setcallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="categories">
            <form onSubmit={createCategory}>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" value={category} required
                onChange={e => setCategory(e.target.value)} />

                <button type="submit">{onEdit ? "Update" : "Save"}</button>
            </form>

            <div className="col">
                {
                    categories.map(category => (
                        <div className="row" key={category._id}>
                            <p>{category.name}</p>
                            <div>
                                <button onClick={() => editCategory(category._id, category.name)}>Edit</button>
                                <button onClick={() => deleteCategory(category._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
