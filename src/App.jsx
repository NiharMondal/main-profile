import React from "react";
import { Main, About, Projects, Contact } from "./components";

const App = () => {
  return (
    <div className="reset">
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
