import React, { useState } from 'react'


export default function FormExample({initValues}) {

    const style = { margin: '10px 0' };
    const [values, setValues] = useState(initValues)
    const [errors, setErrors] = useState({})

    function validate(event) {
        const target = event.target;

        setErrors({ ...errors, [target.name]: '' })

        if('' === target.value.trim()) {
            setErrors({ ...errors, [target.name]: 'Ce champs est obligatoire' });
        }
    }

    function handleNom(event) {
        const nom = event.target.value.toUpperCase();
        event.target.value = nom;

        handleChange(event);
    }

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        // console.log({ ...values, prenom: 'update' });
        // ... = spreed operator

        setValues({...values, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={style}>
                <label>Nom: </label>
                <input type="text" name="nom" value={ values.nom } onChange={handleNom} onBlur={validate} />
                { errors.nom && <p>{errors.nom}</p> }
            </div>

            <div style={style}>
                <label>Prénom: </label>
                <input type="text" name="prenom" value={ values.prenom } onChange={handleChange} onBlur={validate} required/>
            </div>

            <div style={style}>
                <button>Valider</button>
            </div>
        </form>
    )
}

FormExample.defaultProps = {
    initValues: {
        nom: 'Doe',
        prenom: ''
    }
}
