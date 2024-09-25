import styles from './Ingredients.module.css';

const listItem = [
  '2-3 large eggs',
  'Salt, to taste',
  'Pepper, to taste',
  '1 tablespoon of butter or oil',
  'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
]

export default function Ingredients() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ingredients</h2>
      <ul className={styles.list}>
        {listItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
