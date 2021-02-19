import React from "react";
import Panneau from "./Panneau";

export default class Accordeon extends React.Component {

    constructor(props) {
        super(props);
        const panel = new Set();
        panel.add(this.props.items[0]);
        this.state = { panel }

        this.toogle = this.toogle.bind(this);
    }
    toogle(item) {
        const panel = this.state.panel;
        if(panel.has(item)) {
            panel.delete(item);
        } else {
            panel.clear();
            panel.add(item);
        }
        this.setState( { panel });

    }
    render() {
        const { items } = this.props;
        return(
            <div>
                {items.map( item => (
                    // todo volet
                    <Panneau key={item.id}
                             item={item}
                             handle={ this.toogle}
                             open={this.state.panel.has(item)} />
                ))}

            </div>

        );
    }
}