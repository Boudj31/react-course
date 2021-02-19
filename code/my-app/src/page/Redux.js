import ReduxCounter from "../components/Counter/ReduxCounter";

export default function Redux() {

    return(
        <>
            <h1>Redux</h1>
            <p>Necessite 2 dépendance Redux et React Redux </p>
            <ul>
                <li><b>Global State</b>: Unique, centralise tous les states des composants</li>
                <li><b>Actions</b>: interaction entre l'utilisation et l'application (dispacher) </li>
                <li><b>Reducer</b>: défini l'effet d'une action sur le state </li>
            </ul>
            <h2>Counter Redux</h2>
            <ReduxCounter />

            <h2>Composant Person Redux</h2>
            { /* balise input et button pour renseigner le nom d'un utilisateur à enregister dans le store */}
            {/* 2nd composant inséré dans un App qui affiche le nom de l'utilisateur*/}
        </>
    )
}