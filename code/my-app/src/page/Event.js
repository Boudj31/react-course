export default function Event() {

    /*function handleClick() {
       alert('Bravo');
    }*/
    // function() {} -> fonction anonyme
    // () => {} -> fonction flechée
    // lorsqu'on n'utilise pas de param on peut remplacer les () par _
    // si la fonction fl utilise le mot-clé return et qu'elle n'est défini
    // que par une seule ligne, les {} et return ne sont pas obligatoires

    const handleClick = () => {
        alert('Bravo !');
    }

    function confirmation(e) {
        console.log(e);
        e.preventDefault(); // empeche le comportement par defaut d'une balise
        alert('Sure ?');
    }

    function handleKeyPress(event) {
        if('Enter' === event.key) {
            alert(event.target.value)
        }

    }

    return (
        <div>
            <h1>Les évènements </h1>
            <p>Contrairement au DOM en React on associe une fonction au événement et pas une chaine de caractère </p>
            <button onClick={ handleClick }>Clicker ici</button>
            <button onClick={() => alert('Encore Bravo')}>Ici aussi</button>

            <div>
                <a href="www.google.fr" onClick={ confirmation }> Supprimer des fichiers </a>
            </div>

            <input type="text" placeholder="Entrez votre message" onKeyPress={ handleKeyPress}/>

        </div>
    );
}