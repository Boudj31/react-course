import React from 'react';

export default class Counter extends React.Component {

    static defaultProps = {init: 0};

    constructor(props) {
        super(props);
        this.state = { counter: this.props.init}; //init
        this.augmenter = this.augmenter.bind(this);
        this.diminuer = this.diminuer.bind(this);
    }

    diminuer() {
        this.setState( { counter : this.state.counter -1 } );
    }

    augmenter() {
        this.setState( { counter : this.state.counter +1 } );
    }

    render() {

        const { counter } = this.state;
        return(
            <>
                <div className="center nav">
                    <button onClick={ this.diminuer }> Diminuer </button>
                    <span> { counter } </span>
                    <button onClick={ this.augmenter }> Augmenter </button>
                </div>
            </>
        );
    }

}
