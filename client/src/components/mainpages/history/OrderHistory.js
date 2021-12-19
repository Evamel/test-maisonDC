import React, {useContext} from 'react'
import { GlobalState } from '../../../GlobalState'
import {Link} from 'react-router-dom'

export default function OrderHistory() {
    const state = useContext(GlobalState)
    return (
        <div>
            Order History
        </div>
    )
}
