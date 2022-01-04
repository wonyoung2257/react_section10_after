import classes from "./MealsSummery.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식이 배달됩니다.</h2>
      <p>음식을 선택해주세요</p>
      <p>모든 음식은 최상의 퀄리티를 자랑합니다.</p>
    </section>
  );
};

export default MealsSummary;
