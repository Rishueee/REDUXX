import React from 'react';
import { inc, dec, Selector } from './reduxxx/reducer'; 
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const incdec = useSelector(Selector);

    function increase() {
        dispatch(inc());
    }

    function decrease() {
        dispatch(dec());
    }

    return (
        <div>
            <h1>{incdec}</h1>
            <button onClick={increase}>Like</button>
            <button onClick={decrease}>Unlike</button>
        </div>
    );
}

export default Counter;
