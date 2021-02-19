export default function Panneau( { item, open, handle }) {
    const style = { marginBottom: 0, cursor: 'pointer'};

    function handleClick() {
        handle(item);
    }
    return(
        <div>
            <h4 style={style} onClick={handleClick}> { item.title }</h4>
            { open && <div> { item.content }</div> }
        </div>
    )
}

Panneau.defaultProps = { open: false};