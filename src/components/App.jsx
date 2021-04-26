import "../styles/index.scss";

import React from "react";
import Recipes from './Recipes'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Ohai, Mark!</h1>
        </section>
      </main>
      <Recipes></Recipes>
    </>
  );
};

export default App;
