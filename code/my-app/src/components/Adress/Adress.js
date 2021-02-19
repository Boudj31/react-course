export default function Adress( { address }) {
    return (
        <address>
            { address.street } { address.suite} <br />
            { address.city } { address.zipcode}
        </address>
    );
}