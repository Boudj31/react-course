import React from 'react';

export default class Todo extends React.Component {


    constructor() {
        super();
    this.state = { todos: ["Manger", "Dormir", "Sortir", "Coder"] };

    }

    render() {

        const { todos } = this.state;

        return(
            <>
             <table>
                 <thead>
                   <tr>
                    <th>A Faire</th>
                    <th>Actions </th>
                   </tr>
                 </thead>
                 <tbody>
                 { todos.map( (todo) => {
                     return <tr key={todo.id}>
                               <th> { todo.desc}</th>
                               <th> ???? </th>
                            </tr>
                 })}

                 </tbody>
             </table>
            </>
        );
    }

}
