import React, {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'

export default function DetailProduct() {
    const params = useParams()
    console.log(params)
    return (
        <div>
            Detail products
        </div>
    )
}
