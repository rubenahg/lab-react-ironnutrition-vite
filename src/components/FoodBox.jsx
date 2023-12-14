function FoodBox({ foods, changeFoods }) {

    function deleteFood(id) {
        const filteredFoodArray = foods.filter((food) => {
            return food.id !== id;
        });

        changeFoods(filteredFoodArray);
    }

    return (
        <>
        <h2>Food List</h2>
            <div style={{display: "flex", gap: "50px", flexWrap: "wrap", justifyContent: "center"}}>
                {foods.map((food) => {
                    return (
                        <div key={food.id}>
                            <p>{food.name}</p>

                            <img src={food.image} style={{height: "150px"}} />

                            <p>Calories: {food.calories}</p>
                            <p>Servings {food.servings}</p>

                            <p>
                                <b>Total Calories: {food.calories * food.servings} </b> kcal
                            </p>

                            <button onClick={() => deleteFood(food.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
  
export default FoodBox;