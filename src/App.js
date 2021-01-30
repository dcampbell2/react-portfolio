import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import projects from "./projects.json";
import {
  BrowserRouter,
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          <Switch>
            <Route path="/Contact" component={Contact} />
            <Route
              path="/Portfolio"
              render={(project) => (
                <Portfolio {...project} image={projects[0].image} />
              )}
            />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
      </div>
    </HashRouter>
  );
}

export default App;
