import React from 'react'
import './App.css'

class RecipeComponent extends React.Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return(
            <div class="container">
                <h1>{this.props.title}</h1>
                <div className="side">
                    <img src={this.props.image} alt=""/> 
                    <ul>
                        {this.props.ingredients.map((_ingredients) => 
                     {
                            return(
                            <li>{_ingredients.text}</li>
                         )
                     })}
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default RecipeComponent