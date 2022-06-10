import { Fragment } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Footer from "./component/Header/Footer";
import Header from "./component/Header/Header";
import About from "./container/Departments/About";
import Contact from "./container/Departments/Contact";
import Departments from "./container/Departments/Departments";
import Doctors from "./container/Departments/Doctors";
import Home from "./container/Home/Home";


function App() {
  return (
    <Fragment>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/departments" exact component={Departments} />
        <Route path="/doctors" exact component={Doctors} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
