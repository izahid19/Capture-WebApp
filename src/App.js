import React from 'react';
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

//Import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutUs} />
          <Route path="/work" exact component={OurWork} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/work/:id" component={MovieDetail} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;