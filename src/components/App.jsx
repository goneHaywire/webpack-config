import "../styles/index.scss";

import React from "react";
import Recipes from './Recipes'

// for image imports
// import { img } from "../images/image"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Ohai, Mark!</h1>
        </section>
      <Recipes></Recipes>

      </main>
      {/* <img src={image} alt="image"/> */}
    </>
  );
};

export default App;
