import { connect } from 'react-redux';
import {logIn, logOut} from '../../redux/action/actionCreatorAuthentication';


function AuthenticationForm({authentication, logIn, logOut}) {

    const isLogged = true;
    const name = 'James';

    function handleLogin() {
        logIn();
    }

    function handleLogout() {
        logOut();
    }

    return (
        <>
            <h1>Authentication</h1>

            { authentication.isLogged ? (
                <>
                    <p>Bonjour {authentication.name}</p>
                    <button onClick={handleLogout}>Déconnexion</button>
                </>
            ) : (
                <form>
                    <div>
                        <label>Username: </label>
                        <input type="text" value="admin" readOnly />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value="admin" readOnly />
                    </div>
                    <button type="button" onClick={handleLogin}>Se connecter</button>
                </form>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        authentication: state.authentication
    }
};
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationForm);

/**
 * Lors de la connexion (clic sur le bouton se connecter) on enregistre l'information de connexion en mémoire.
 * Quand on est connecté la page AuthenticationForm affiche le nom de l'utilisateur connecté ( nom défini de manière static)
 * + un bouton de déconnexion
 *
 * La page /private doit être accessible quand on est connecté
 *
 * -------------------
 *
 * Faire persister la connexion
 */