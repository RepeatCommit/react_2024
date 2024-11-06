import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";




function App() {


    const counter1ValueState =  useAppSelector((state) => state.counter1SliceState.value);
    const dispatch =  useAppDispatch();


    return (
    <div>
        <h2>{counter1ValueState}</h2>
        <button onClick={() => {
        dispatch(increment());
        }}>inc
        </button>

        <button onClick={() => {
        dispatch(decrement());
        }}>
        dec
        </button>

        <button onClick={() => {
            dispatch(incrementByAmount(5));
        }}>inc by amount of 5
        </button>


    </div>
  );
}

export default App;
