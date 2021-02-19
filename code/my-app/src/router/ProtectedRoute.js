import {Route, Redirect} from "react-router-dom";
import Unauthorized from "../components/Error/Unauthorized";

// dans notre cas children représente Private()
export default function ProtectedRoute({redirect, children,...props }) {

    const isLogged = false;

    return(
        <Route {...props}>
            { isLogged ? children : redirect ? <Redirect to={redirect}/> : <Unauthorized /> }
        </Route>

    )
}