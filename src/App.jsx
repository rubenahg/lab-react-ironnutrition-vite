import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Foods from "./foods.json";
import { useState } from 'react';

function App() {
  const [foodArray, setFoodArray] = useState(Foods);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foodArray} changeFoods={setFoodArray} />
      <FoodBox foods={foodArray} changeFoods={setFoodArray} />
    </div>
  );
}

export default App;
