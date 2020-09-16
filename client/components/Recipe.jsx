import React from 'react'

const Recipe = props => {
  // destructure props to just get name, image, intructions, ingredients
  const { name, imageLink, instructions, ingredients } = props;

  return (
    <div className='recipe'>
      <div className='recipeName'>{name}</div>
      <div className='recipeImg'>
        {imageLink}
      </div>
      <div>
        <div className='instructions'>
        {instructions}
        </div>
        <div className='ingredients'>
        {ingredients}
        </div>
      </div>
    </div>
  )
}

export default Recipe;