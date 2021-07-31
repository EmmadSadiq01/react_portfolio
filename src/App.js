import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
// import Navbar1 from "./components/Animated_navbar/Navbar1";
import Navbar2 from "./components/animated_navbar2/Navbar2";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Navbar1/> */}
        <Navbar2/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
