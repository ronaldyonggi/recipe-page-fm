import omeletteImage from '../../assets/images/image-omelette.jpeg';
import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instructions/Instructions';
import Nutrition from './Nutrition/Nutrition';
import PreparationTime from './PreparationTime/PreparationTime';
import styles from './RecipeCard.module.css';

export default function RecipeCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={omeletteImage}
          alt='Image of omelette'
        />
      </div>
      <h1 className={styles.title}>Simple Omelette Recipe</h1>
      <p className={styles.description}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <PreparationTime />
      <Ingredients />
      <hr className={styles.divider} />
      <Instructions />
      <hr className={styles.divider} />
      <Nutrition />
    </div>
  );
}
