import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/project/Projects";
import Contact from "./pages/contact/Contact";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./App.css";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <Router>
      <button
        onClick={showSidebar}
        className={sidebar ? "toggle hide" : "toggle open"}
      >
        <AiOutlineMenu />
      </button>
      <button
        onClick={showSidebar}
        className={sidebar ? "toggle close" : "toggle hide"}
      >
        <AiOutlineClose />
      </button>

      <Navigation sidebar={sidebar} />

      <div className={sidebar ? "content-open" : "content-wide"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/:somestring" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
