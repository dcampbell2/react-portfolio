import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import Contact from "./containers/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
