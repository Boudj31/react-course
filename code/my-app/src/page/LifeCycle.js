import React from "react";
import Clock from "../components/Clock/Clock";

export default class LifeCycle extends React.Component {
    render() {

        return(
            <>
                <h1>Cycle de vie d'un composant </h1>
                <img src="images/MicrosoftTeams-image.png" alt="cycle de vie"/>
                <h2>Mon Horloge</h2>
                <Clock />
            </>
        );
    }
}