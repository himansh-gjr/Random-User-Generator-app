import "./App.css";
import Nav from "./components/Nav";
import Nationalities from "./components/Nationalities";
import Genders from "./components/Genders";
import RandomUserNat from "./components/RandomUserNat";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RandomUserGender from "./components/RandomUserGender";

function App() {
  return (
    <div className="App">
      <h1 className="main-header">Genrate a random user by</h1>
      <Router>
        <Nav />
        <Switch>
          <Route path={"/nationalities"} exact component={Nationalities} />
          <Route path={"/genders"} component={Genders} />
          <Route path={"/gender/:gen"} component={RandomUserGender} />
          <Route path={"/nationalities/:nat"} component={RandomUserNat} />
          <Redirect from="/" to="/nationalities" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
