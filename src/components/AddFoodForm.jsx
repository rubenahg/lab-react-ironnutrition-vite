import { useState } from "react";

function AddFoodForm({ foods, changeFoods }) {
    const [name, changeName] = useState("");
    const [image, changeImage] = useState("");
    const [calories, changeCalories] = useState("");
    const [servings, changeServings] = useState("");

    const addFood = (e) => {
        e.preventDefault();
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        }

        const newFoodArray = [newFood, ...foods];
        changeFoods(newFoodArray);
    }

    return (
        <div style={{}}>
            <h2>Add Food</h2>
            <form onSubmit={addFood}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={(e) => {changeName(e.target.value)}} />

                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" value={image} onChange={(e) => {changeImage(e.target.value)}} />

                <label htmlFor="calories">Calories</label>
                <input type="number" name="calories" id="calories" value={calories} onChange={(e) => {changeCalories(e.target.value)}} />

                <label htmlFor="servings">Servings</label>
                <input type="number" name="servings" id="servings" value={servings} onChange={(e) => {changeServings(e.target.value)}} />

                <button>Create</button>
            </form>
        </div>
    );
}
  
export default AddFoodForm;