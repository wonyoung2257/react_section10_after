import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [mealsArray, setMealsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMeal = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://reatc-http-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("에러가 발생함");
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
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

  let content = <ul>{mealsList}</ul>;

  if (mealsArray.length === 0) {
    content = <p>불러올 음식이 없습니다.</p>;
  }
  if (error) {
    content = <p>에러가 발생했음</p>;
  }
  if (isLoading) {
    content = <p>Loading.....</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
