import React from "react";

export default function DataList({ items }) {

    return (
        <div>
            <dl>
                {items.map( (item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <dt>{item.term}</dt>
                            <dl>{item.description}</dl>
                        </React.Fragment>
                    )
                })};
            </dl>
      </div>
    )
}