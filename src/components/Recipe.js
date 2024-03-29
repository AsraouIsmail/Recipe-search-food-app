/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails';

function Recipe({recipe}) {
    const [show, setShow] = useState(false);
    const {label, image, url, ingredients} = recipe.recipe;
    return (
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} 
            target="_blank" 
            rel='noopner noreferrer'>URL</a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && < RecipeDetails ingredients={ingredients}/>}
            
        </div>
    )
}

export default Recipe
