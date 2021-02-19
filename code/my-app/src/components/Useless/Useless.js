import React , {Component} from "react";

export default class Useless extends Component {

    static defaultProps = {
        lastname: 'Doe'
    }

    constructor(props) {
        super(props);
        this.bar = this.bar.bind.this;
    }
    handleclick() {
        alert('Bravo');
    }

    foo() {
        console.log('foo()', this);
    }

    //Binding explicite
    bar(){
        console.log('bar()', this);
    }
    //Binding explicite
    baz = () => {
        console.log('baz()', this);
    }

    render() {
        return (
            <>
                <h2>Composant Useless </h2>
                <p>Hello {this.props.name} {this.props.lastname}</p>
                <button onClick={this.handleclick}> Cliquez ici</button>

                <hr />
                <h2>Faire reference à this</h2>

                <h3>Problème</h3>
                <button onClick={this.foo}>Fonction Foo()</button>

                <h3>Résolution</h3>
                <button onClick={this.bar}>Fonction Bar()</button>
            </>
        )
    }
}