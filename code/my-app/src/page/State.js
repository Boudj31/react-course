import Counter from "../components/Counter/Counter";
import Accordeon from "../components/Accordeon/Accordeon";

export default function State() {

   const items = [
        { id: 1, title: 'Title #1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '},
        { id: 2, title: 'Title #2', content: 'Beatae consectetur eligendi nisi repellendus similique suscipit?'},
        { id: 3, title: 'Title #3', content: 'Asperiores laboriosam obcaecati omnis sint temporibus ullam.'}
    ];

    return(
        <>
            <h1>L'Etat Local</h1>
            <h2>Que fait setState ?</h2>
            <p>setState() planifie la mise à jour de l’objet state du composant. Quand l’état local change, le composant répond en se rafraîchissant.</p>

            <h2>Quelle est la différence entre state et props ?</h2>
            <p>props (diminutif de « propriétés ») et state sont tous les deux des objets JavaScript bruts. Même s’ils contiennent tous les deux des informations qui influencent le résultat produit, ils présentent une différence majeure : props est passé au composant (à la manière des arguments d’une fonction) tandis que state est géré dans le composant (comme le sont les variables déclarées à l’intérieur d’une fonction).
                Voici quelques ressources utiles pour mieux comprendre selon quels critères choisir entre props et state :</p>
            <ul>
                <li><a href="https://github.com/uberVU/react-guide/blob/master/props-vs-state.md"> props VS state</a></li>
                <li><a href="https://lucybain.com/blog/2016/react-state-vs-pros/">React JS props VS state</a></li>
            </ul>
             <h2>Composant counter</h2>
            <Counter />
            <p>Faire descendre une valeur</p>
            <Counter init={10} />
            <p>Faire monter une valeur</p>
            <Accordeon items={items} />
        </>
    )
}