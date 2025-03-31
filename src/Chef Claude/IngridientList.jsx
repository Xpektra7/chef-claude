/* eslint-disable react/prop-types */
export default function IngridientList(props){
    return(
        <section id="recipeHolder">
        <h1>Ingridients on hand:</h1>
        <ul>
          {props.ingridients.map((ingridient, index) => (
            <li key={index}>{ingridient}</li>
          ))}
        </ul>
        {props.ingridients.length > 3 && (
          <div className="cta">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingridients</p>
            </div>
            <button onClick={() => props.toggleRecipeShown(true)}>Get a recipe</button>
          </div>
        )}
      </section>

    )
}