import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngridientList from "./IngridientList";
import { getRecipeFromGemini } from "../ai";

export default function MainComponent() {
  const [ingridients, addIngridients] = useState(["bread","oil","salt","garri"]);
  const [recipe, setRecipe] = useState("");

  function addIngridient(formData) {
    formData.get("ingridient")
      ? ingridients.includes(formData.get("ingridient").trim().toLowerCase())
        ? null
        : addIngridients((ingridients) => [
            ...ingridients,
            formData.get("ingridient").trim().toLowerCase(),
          ])
      : null;      
  }
  async function getRecipe(){
    const recipe = await getRecipeFromGemini(ingridients);
    setRecipe(recipe);
  }
  return (
    <main>
      <form className="search-form" action={addIngridient}>
        <input
          type="text"
          className="search-bar"
          placeholder="e.g oregano"
          aria-label="Add ingridient"
          name="ingridient"
        />
        <button type="submit" className="search-button">
          + Add ingridient
        </button>
      </form>
      {ingridients.length ? (
        < IngridientList ingridients={ingridients} toggleRecipeShown={getRecipe} />
      ) : null}
      {recipe  && ( <ClaudeRecipe recipe={recipe} /> )}
    </main>
  );
}
