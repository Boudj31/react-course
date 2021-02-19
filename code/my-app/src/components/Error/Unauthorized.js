import {Link} from "react-router-dom";

export default function Unauthorized() {
    return(
        <div>
            <h1>401 - Unauthorized</h1>
            <p>Vous n'êtes pas authorisé à accéder à cette page </p>
            <p>Revenir à la page <Link to={"/"}>Accueil</Link></p>
        </div>
    )
}