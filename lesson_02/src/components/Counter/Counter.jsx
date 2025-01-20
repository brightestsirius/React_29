import React, {useState, useEffect} from 'react'
import './style.sass'

// component lifecycle

// componentDidMount
// componentDidUpdate
// componentWillUnmount

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [counterColor, setCounterColor] = useState(`blue`);
    const [intervalId, setIntervalId] = useState();

    // console.log(`counter`, counter);

    // setValue(counter+1); // 0+1 => 1
    // setValue( (prevState) => prevState+1 )

    // useEffect( ()=>{}, [] ) - run only on first component render

    useEffect( ()=>{
        console.log(`in useEffect`);

        setTimeout(() => {
            console.log(`after 2 sec`);
            setCounter(prevState => prevState+1);
        }, 2000)

        // fetch();

        return () => {
            console.log(`in componentWillUnmount!!!`);
            //clearInterval(intervalId);
        }
    }, [] );

    useEffect(() => {
        console.log(`in useEffect for counter`, counter);
        if(counter === 3) setCounterColor(`orange`);
    }, [counter])

    useEffect(() => {
        console.log(`in useEffect for counter && counterColor`, counter, counterColor);
    }, [counter, counterColor])

    const handleDecrement = () => {
        setCounter(counter-1);
    }

    const handleColor = () => {
        setCounterColor(`red`);
    }

    const handleTimeout = () => {
        const incrementIntId = setInterval(() => {
            console.log(`in interval`);
            setCounter( prevState => prevState+1 );
        }, 1000); // 15

        setIntervalId(incrementIntId);
    }

  return (
    <div className='counter'>
        <button onClick={handleDecrement}>-</button>
        <span style={ {color: counterColor} }>{counter}</span>
        <button onClick={handleColor}>Set red color</button>
        <button onClick={handleTimeout}>Increment counter after 1 sec</button>
    </div>
  )
}