import React from "react";

// Composants Pure Fonctionnel (Stateless Functional Component)

export function Sandbox() {
    // nom, attr, contenu
    return React.createElement('p',{},'Ce composant est vraiment cool')

}

export function SandBoxWithJSX(){
    return <p>Ce composant est encore mieux !</p>
}

/**
 *
 * @param props Object
 */
export function SandBoxWithProps(props){
    return <p>Ce 3eme composants est {props.adjectif} !</p>
}

export function SandBoxWithDestructuration({adjectif}){
    return <p>Ce 4eme composants est {adjectif} !</p>
}

