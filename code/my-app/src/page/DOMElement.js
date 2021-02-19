import DataList from "../components/DataList/DataList";

export default function DOMElement() {

    const items = [
        {id: 1, term: 'Attack des titans', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore laboriosam obcaecati? A accusamus'},
        {id: 2, term: 'One Piece', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore laboriosam obcaecati? A accusamus'},
        {id: 3, term: 'Black clover ', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore laboriosam obcaecati? A accusamus'},
        {id: 4, term: 'My Hero Academia', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore laboriosam obcaecati? A accusamus'}
    ];


    return(
        <div>
            <h1>Spécificité du DOM de React</h1>
            <p>React travaille avec un DOM virtuel, qui est injecté dans le DOM réel apres Interprétation</p>
            <h2>Règles de syntaxe</h2>
            <ul>
                <li>Composant= PascalCase</li>
                <li>Props= camelCase; (html) tabindex = (react) tabIndex</li>
                <li>Exception pour aria-* et data-*</li>
            </ul>

            <h2>DOM</h2>
            <h3>htmlFor</h3>
            <p>Remplace la clé <b>for</b> par <b>htmlFor</b></p>

            <div>
                <input type={"checkbox"} id={"target"}/>
                <label htmlFor={"target"}>Ceci est un exemple de la props htmlFor </label>
            </div>

            <h3>Défaut Visuel</h3>
            <p>Ceci est le début de mon <mark>texte</mark>, pour la fin je reviens à la ligne.</p>

            <h2>CSS</h2>
            <h3>Importer une feuille de style </h3>
            <code>import './path/to/file.css'</code>

            <h3>Attribut class</h3>
            <p>L'attribut <b>class</b> est remplacé par la props <b>className</b> en React</p>

            <h3>Attribut style</h3>
            <p>Identique à l'attribut HTML par contre les valeurs sont transmises à l'aide d'un objet JS,
            Les propriétés CSS s'ecrivent avec la syntaxe JS</p>

            <code>{`<p style={ {color: 'white', backgroundColor: 'black', padding: 5 } }>...</p>`} </code>
            <p>Pour les propriétés avec valeur numérique, l'unité par defaut est le px </p>
            <p style={ {color: 'white', backgroundColor: 'darkred', padding: 5 } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et nostrum optio quas quasi quia quisquam quo repellat velit vero! Aut ducimus fuga, id maxime necessitatibus officia quisquam quo. Delectus!</p>

            <h2>Fragment</h2>
            <p>Les <b>Fragment</b> permettent de grouper des listes HTML sans avoir à ajouter un noeud supplémentaire</p>

            <DataList items={items}/>

        </div>
    )
}