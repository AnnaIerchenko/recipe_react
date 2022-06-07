import React from 'react'
import CustomImg from './CustomImg'

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <CustomImg imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className='auther-img' src={recipe.authorImg} alt="chief" />
        <p className='recipe-title'>{recipe.title}</p>
        <p className='recipe-desc'>Lorem simply tummmy text of the 
        printing and typesetting industry</p>
        <a className='view-btn' href="#!">VIEW RECIPE</a>
      </div>
    </div>
  )
}

export default RecipeCard