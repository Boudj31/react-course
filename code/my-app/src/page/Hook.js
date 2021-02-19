import React, { useState, useEffect } from 'react'
import HookCounter from "../components/Counter/CounterHook";

export default function Hook() {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState("Doe");

    function handleInput(event) {
        if ('Enter' === event.code) {
            setName(event.target.value)
        }
    }

    useEffect(() => {
        //componentDidMount, componentDidUpdate
        document.title = `Hello ${name || ''} ${lastname}`;

        // componentWillUnMount
        return function cleanup() {
            document.title += '; will unmount !'
        }
    })

    return (
        <>
            <h1>Les hooks</h1>

            <h3>Hook d'état</h3>
            <p>Permet d'utiliser les états local de notre composant dans une fonction. Pour cela, on fait appelle à la
                fonction <b>useState</b>. <b>useState</b> est une fonction dont le comportement est similaire à propriété
                this.state. La fonction <b>useState</b> peut être appelé plusieurs fois.</p>

            <h3>Hook d'effet</h3>
            <p>Permet d'utiliser le cycle de vie d'un composant au sein d'une fonction. Pour cela, on fait appelle à la
                fonction <b>useEffect</b>. <b>useEffect</b> à le même role que <b>componentDidMount</b>,
                <p>componentDidUpdate</p>, <p>componentWillUnMount</p>
            </p>

            <p>Hello { name } { lastname }</p>
            <input type="text" onKeyPress={handleInput} />

            <HookCounter />
        </>
    )
}