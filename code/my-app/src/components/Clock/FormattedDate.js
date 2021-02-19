 export function FormattedDate( { date } ) {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    return date.toLocaleDateString('fr-FR', options);
}

export function FormattedTime( { date } ) {
    return date.toLocaleTimeString('fr-FR');
}