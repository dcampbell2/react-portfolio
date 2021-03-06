import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import projects from "./projects.json";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/Contact" component={Contact} />
            <Route
              path="/Portfolio"
              render={(project) => (
                <Portfolio {...project} image={projects[0].image} />
              )}
            />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
          </Router>
      </div>
  );
}

export default App;
