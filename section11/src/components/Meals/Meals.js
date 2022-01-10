import { Fragment } from "react";
import AvailableMeal from "./AvailableMeals";
import MealsSummary from "./MealsSummery";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meals;
