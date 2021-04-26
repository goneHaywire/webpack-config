// @refresh reset
// used to force hard reload of a component

import {useState} from 'react'

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return(
        <>
        <h3>Current Recipe: </h3>
        <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
        <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gauntlets Recipe</button>

        <ul>
            {Object.keys(recipe).map((material) => (<li key={material}>{material}: {recipe[material]}</li>))}
        </ul>
        </>
    )
}

export default Recipes