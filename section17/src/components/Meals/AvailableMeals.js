import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [mealsArray, setMealsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getMeal = async () => {
    const response = await fetch(
      "https://reatc-http-default-rtdb.firebaseio.com/meals.json"
    );

    if (!response.ok) {
      alert("에러발생");
    }

    const data = await response.json();
    const loadedMeal = [];

    for (const meal in data) {
      loadedMeal.push({
        id: data[meal].id,
        name: data[meal].name,
        description: data[meal].description,
        price: data[meal].price,
      });
    }

    setMealsArray(loadedMeal);
    setIsLoading(true);
  };

  useEffect(() => {
    getMeal();
  }, []);

  const mealsList = mealsArray.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{!isLoading ? <p>Loading.....</p> : <ul>{mealsList}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
