import React from 'react'
import { buyChicken } from '../redux/chicken/chickenActions'
import { useDispatch, useSelector } from 'react-redux'

const HookChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChikens)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Num of Hook Chickens - {numOfChickens}</h1>
            <button onClick={() => dispatch(buyChicken())}>Buy Chicken</button>
        </>
    )
}

export default HookChickenContainer