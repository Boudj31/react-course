import React from 'react';
import Adress from "../Adress/Adress";

export default class UserList extends React.Component {

    constructor() {
        super();
        this.state = { users: [] };
    }
   /* componentDidMount() {
        const apiURL = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiURL).then(  (response) => {
            console.log(response);
            return response.json();
        }).then( (users) => {
            this.setState({ users });
        });
    }

    */

    async componentDidMount() {
        const apiURL = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(apiURL)
        console.log(response);
      const users = await response.json();
      this.setState( { users });

    }



    render() {
        const { users } = this.state;
        return(

            <table border={1} width="100%" cellPadding={5} cellSpacing={0}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Adress address={user.address } />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }

}