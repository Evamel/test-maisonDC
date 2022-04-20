import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

export default function Filters() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products


    return (
        <div className='filter-menu'>
            <div className='row'>
                <span>Filters: </span>
                <select name="category">

                </select>
            </div>
            
        </div>
    )
}
