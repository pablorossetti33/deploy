import "./App.css";
import { Home, Landing, Detail, NewActivity, Error404 } from "./views";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "deploy-production-cb38.up.railway.app/";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route exact path="/" component={Landing} />

      <Route exact path="/home" component={Home} />

      <Route exact path="/create" component={NewActivity} />

      <Route exact path="/detail/:id" component={Detail} />

      <Route path='*' component={Error404} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
