import FormExemple from "../components/Form/FormExemple";

export default function Formulaire()  {
    return(
        <>
            <h1>Les Formulaires</h1>
            <ol>
                <li>Source de Valeur Unique (Etat Local)</li>
                <li>2 attributs pour gérer les valeur des champs de formulaire(value et checked) (defaultValue et DefaultChecked)</li>
                <li>1 Event unique pour gérer la détection de la mise à jour du champs (onChange)</li>

                <FormExemple />
            </ol>
        </>
    );
}