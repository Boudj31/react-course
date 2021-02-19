import UserList from "../components/User/UserList";

export default function ApiRequest() {
    return(
        <>
            <h1>Request Asynchrone vers une Api Rest</h1>
            <h2>Comment faire un appel AJAX ?</h2>
            <p>Vous pouvez utiliser n’importe quelle bibliothèque AJAX de votre choix avec React. Parmi les plus populaires, on trouve Axios, jQuery AJAX, et le standard window.fetch intégré au navigateur.</p>
            <h2>Où dois-je faire mon appel AJAX dans le cycle de vie du composant ?</h2>
            <p>Vous devriez obtenir vos données via des appels AJAX dans la méthode de cycle de vie componentDidMount. De cette façon, vous pourrez y utiliser setState pour mettre à jour votre composant lorsque les données seront récupérées.</p>
            <UserList />
        </>
    );
}