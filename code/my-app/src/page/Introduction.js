import {Sandbox, SandBoxWithJSX, SandBoxWithProps} from "../components/sandbox/Sandbox";
import HTMLDetail from "../components/HTMLDetail/HTMLDetail";

export default function Introduction() {
    let name = 'Rachton';
    const html = '<i> Contenu Safe </i>';
    const attack_xss = '<i> Attention <script>alert("coucou")</script> </i>';

    // literal object
    const user = { firstname: 'John', lastname: 'Doe'};

    //destructuration
    const numbers = [1, 2, 3, 4];
    let [a,b,c,d, e=0] = numbers;

    let content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis, cumque esse et excepturi illo incidunt inventore itaque nisi odit porro quo quod rem repellat repellendus repudiandae sed sequi tempora?"


    let {firstname, lastname, email = 'unknown'} = user;
    return (
    <div>
        <h1> Introduction </h1>
        <Sandbox />

        <h2>Avec JSX</h2>
        <SandBoxWithJSX />

        <h2>JSX</h2>
        <p>Chaine de caractère: {'Hello Word'} </p>
        <p>Template ES6: {`hello word ${name}`}</p>
        <p>Integer: { 10 }</p>
        <p>Réel: { 10.5 }</p>
        <p>Boolean: { '{true} ou {false}'}</p>

        <p>HTM: {attack_xss} => protection des failles XSS</p>
        <p dangerouslySetInnerHTML={ { __html: html } } />
        <p>Le DOM</p>
        <p> Document Object Model</p>
        <p><a href="https://la-cascade.io/le-dom-cest-quoi-exactement/">Le Dom c'est quoi ?</a></p>
        <p>En React le DOM manipulé (dans un composant ) n'est pas le DOM réel mais un DOM Virtuel</p>

        <h2>Les Props</h2>
        <p>
            Les props sont des attributs présentés sous forme d'objet (clé/valeur) que l'on peux fournir à la fonction d'un composant React.
        </p>
        <SandBoxWithProps adjectif={"extraordinaire"} />

        <h3>La destructuration </h3>
        <ul>
            <li>a = {a}</li>
            <li>b = {b}</li>
            <li>c = {c}</li>
            <li>d= {d}</li>
            <li>e = {e}</li>
        </ul>

        <dl>
            <dt>Firstname</dt>
            <dd>{ firstname }</dd>
            <dt>Lastname</dt>
            <dd>{ lastname }</dd>
            <dt>Email</dt>
            <dd>{ email }</dd>
        </dl>

        <h2>Exercice composant</h2>
        <HTMLDetail summary="Formation React" content={ content } />

    </div>

    );
}