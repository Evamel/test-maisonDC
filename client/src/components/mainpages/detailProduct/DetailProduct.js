import React, {useContext, useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'

export default function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailProduct, setDetailProduct] = useState([])
    console.log(params)
    return (
        <div>
            Detail products
        </div>
    )
}