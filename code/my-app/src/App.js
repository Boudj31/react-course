import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import Home from "./page/Home";
import Introduction from "./page/Introduction";
import Event from "./page/Event";
import Structure from "./page/Structure";
import DOMElement from "./page/DOMElement";
import ObjectComponent from "./page/ObjectComponent";
import State from "./page/State";
import LifeCycle from "./page/LifeCycle";
import ApiRequest from "./page/ApiRequest";
import Hook from "./page/Hook";
import Todo from "./components/ToDoList/Todo";
import Formulaire from "./page/Formulaire";
import Redux from "./page/Redux";

function App() {

  return (
    <div className="App">
      <nav className="main">
        <ul className="nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
            <li>
                <Link to="/introduction">Introduction</Link>
            </li>
            <li>
                <Link to="/event">Evènement</Link>
            </li>
            <li>
                <Link to="/structure">Structure</Link>
            </li>
            <li>
                <Link to="/dom">DOMElement</Link>
            </li>
            <li>
                <Link to="/component-object">Composant d'objet</Link>
            </li>
            <li>
                <Link to="/state">Etat State</Link>
            </li>
            <li>
                <Link to="/life-cycle">Cycle de vie</Link>
            </li>
            <li>
                <Link to="/api">Api Request</Link>
            </li>
            <li>
                <Link to="/hook">Hook</Link>
            </li>
            <li>
                <Link to="/todo">Todo</Link>
            </li>
            <li>
                <Link to="/form">Forms</Link>
            </li>
            <li>
                <Link to="/redux">Redux</Link>
            </li>
        </ul>
      </nav>

     <section>
         <Switch>
             <Route path="/" exact>
                 <Home />
             </Route>
             <Route path="/introduction">
                 <Introduction />
             </Route>
             <Route path="/event">
                 <Event />
             </Route>
             <Route path="/structure">
                 <Structure />
             </Route>
             <Route path="/dom">
                 <DOMElement />
             </Route>
             <Route path="/component-object">
                 <ObjectComponent />
             </Route>
             <Route path="/state">
                 <State />
             </Route>
             <Route path="/life-cycle">
                 <LifeCycle />
             </Route>
             <Route path="/api">
                 <ApiRequest />
             </Route>
             <Route path="/hook">
                 <Hook />
             </Route>
             <Route path="/todo">
                 <Todo />
             </Route>
             <Route path="/form">
                 <Formulaire />
             </Route>
             <Route path="/redux">
                 <Redux />
             </Route>
         </Switch>
     </section>

     <footer>
         <hr/>
         <p>Formation React - Fevrier 2021</p>
     </footer>


    </div>
  );
}

export default App;
