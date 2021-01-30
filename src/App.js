import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import projects from "./projects.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route path="/Home" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route
          path="/Portfolio"
          render={(project) => <Portfolio {...project} image={projects[0].image} />}
        />
      </Router>
    </div>
  );
}

export default App;
