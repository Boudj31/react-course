import React from 'react';
import {FormattedDate, FormattedTime} from "./FormattedDate";

export default class Clock extends React.Component {

    constructor() {
        super();

        this.state = { date: new Date() }
    }

    componentDidMount() {
        document.title = `il est ${this.state.date.toLocaleTimeString('fr-FR')}`
       this.id = setInterval( _ => {
          this.tick()
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `il est ${this.state.date.toLocaleTimeString('fr-FR')}`;

    }

    componentWillUnmount() {
        document.title += 'Stopped';
        clearInterval(this.id);
    }

    tick() {
        const date = new Date();
        console.log(date);
        this.setState( { date } ); // { date } : { date: date }
    }

    render() {
        return(
          <p>
              Nous sommes le <FormattedDate date={this.state.date} /> et il est <FormattedTime date={this.state.date} />
          </p>
        );
    }

}