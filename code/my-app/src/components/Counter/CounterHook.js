import {useState, useEffect} from 'react';

export default function HookCounter({init}){

    let [counter, setCounter] = useState(init)

    function handleIncrement(){
        setCounter(counter+1)
    }

    function handleIncr(){
        setCounter(counter-1)
    }

    function handleKeyDown(event) {
        if(event.code === 'ArrowUp'){
            handleIncrement();
        }

        if('ArrowDown' === event.code)
        {
            handleIncr()
        }
    }

    useEffect( ()=> {
        document.body.addEventListener('keydown', handleKeyDown);

        return function cleanUp(){
            document.body.removeEventListener('keydown', handleKeyDown);
        }
    });

    return(
        <div className="center nav">
            <button onClick={ handleIncr}> Diminuer </button>
            <span> { counter } </span>
            <button onClick={ handleIncrement }> Augmenter </button>
        </div>
    )
}

HookCounter.defaultProps = { init : 0 };