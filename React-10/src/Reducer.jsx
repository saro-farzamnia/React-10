import { useReducer } from "react"

const initialState = {number:0,count:15}

const reducer = (state,action) => {
    console.log({state,action}) 
    switch (action.type) {
        case "INCREASE" :
            return {...state , number : state.number + 1};
        case "DECREASE" :
            return {...state , number : state.number - 1};
        case "RESET" :
            return {...state , number : 0};
        case "increaseByAmount" :
            return {...state , number : state.number + action.pyload};
        case "INCREASE2" :
            return {...state , count : state.count + 1};
        case "DECREASE2" :
            return {...state , count : state.count - 1};
        case "RESET2" :
            return {...state , count : 0};
        case "increaseByAmount2" :
            return {...state , count : state.count + action.pyload};
        default:
            throw new Error("Invalid Action");
            
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [state2, dispatch2] = useReducer(reducer, initialState)

    const increaseHandler = () => {
        dispatch({type:"INCREASE"})
    }
    const decreaseHandler = () => {
        dispatch({type:"DECREASE"})
    }
    const resetHandler = () => {
        dispatch({type:"RESET"})
    }
    const increaseByAmount = () => {
        dispatch({type:"increaseByAmount",pyload:10})
    }
  return (
    <div>
        <h1>useReducer</h1>
        <h3>{state.number}</h3>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={increaseByAmount}>Increase By Amount</button>
        <hr />
        <h3>{state2.count}</h3>
        <button onClick={()=>dispatch2({type:"INCREASE2"})}>Increase</button>
        <button onClick={()=>dispatch2({type:"DECREASE2"})}>Decrease</button>
        <button onClick={()=>dispatch2({type:"RESET2"})}>Reset</button>
        <button onClick={()=>dispatch2({type:"increaseByAmount2",pyload:15})}>Increase By Amount</button>
    </div>
  )
}

export default Reducer