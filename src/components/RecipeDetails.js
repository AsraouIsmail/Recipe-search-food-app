/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function RecipeDetails({ingredients}) {
    return ingredients.map(ingredient =>{
        return (
          <ul key={uuidv4} className="ingredient-list">
            <li className="ingredient-text">{ingredient.text}</li>
            <li className="ingredient-weight">weight- {ingredient.weight}</li>
            
          </ul>
        );
    })
}

export default RecipeDetails
