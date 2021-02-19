
export default function Structure() {
    const isLogged = false;
    const students = ['Haidaru', 'Yasusaka', 'Rakkido', 'André', 'Victor'];

    const tab = students.map((student)=> {
        return `__${student}__`;
    });



    return (
        <div>
            <h1>Les stuctures </h1>
            <h2>Les conditions</h2>
            <h3>Si...alors...</h3>


            { isLogged && <p>Bonjour le S</p> }

            <h3>Si...Alors...Sinon</h3>
            {isLogged ? (<button >Deconnexion</button>) : (<button>Connexion</button>)}

            <h2>Les itérations</h2>
            <p>Tableau Brut</p>
            { students }

            <p>Valeur séparé par une virgule</p>
            { students.join(',')}

            <p>Liste des valeurs</p>
            <ul>
                {students.map((student, index)=> <li key={index}>{student}</li>)}
            </ul>



        </div>
    );
}