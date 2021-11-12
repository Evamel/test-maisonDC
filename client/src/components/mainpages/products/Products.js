import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

export default function Products() {
    const state = useContext(GlobalState)
    // const [products] = state.productsAPI.products
    console.log(state)
    return (
        <div>
            Products
        </div>
    )
}