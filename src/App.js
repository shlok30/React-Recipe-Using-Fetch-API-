import React from 'react';
import RecipeComponent from './recipe'
import './App.css'

class Recipe extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      recipe:[],
      search:""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount()
  {
    fetch("https://api.edamam.com/search?q=chicken&app_id=5c21a637&app_key=2e7e805cc0f45b56c2fc1b89ce54a93f")
     .then(response => response.json())
     .then(data => 
     {
       console.log(data.hits)
       this.setState(
         {
           recipe:data.hits
         }
       )
     })
  }

  handleChange(event)
  {
    this.setState(
      {
        search:event.target.value
      }
    )
  }

  handleClick(event)
  {
    event.preventDefault()
    console.log('clicked')
    fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=5c21a637&app_key=2e7e805cc0f45b56c2fc1b89ce54a93f`)
     .then(response => response.json())
     .then(data => 
     {
       console.log(data.hits)
       this.setState(
         {
           recipe:data.hits
         }
       )
     })
    
  }

  render()
  {
    return(
      <div>
        <div className="header">
        <form>
          <input type="text" value={this.state.search} onChange={this.handleChange} />
          <button onClick = {this.handleClick}>Search</button>
        </form>
        </div>
        { this.state.recipe.map((_recipe,_key) => 
        {
          return(
            <RecipeComponent title ={_recipe.recipe.label} calories = {_recipe.recipe.calories} image={_recipe.recipe.image} key={_key} ingredients ={_recipe.recipe.ingredients} />
          )
        })}
      </div>
    )
  }

}


export default Recipe;
