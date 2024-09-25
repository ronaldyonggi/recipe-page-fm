import styles from './Instructions.module.css';

const listItems = [
  {
    step: 'Beat the eggs',
    details:
      'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
  },
  {
    step: 'Heat the pan',
    details:
      'Place a non-stick frying pan over medium heat and add butter or oil.',
  },
  {
    step: 'Cook the omelette',
    details:
      'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
  },
  {
    step: 'Add fillings (optional)',
    details:
      'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
  },
  {
    step: 'Fold and serve',
    details:
      'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
  },
  {
    step: 'Enjoy',
    details: 'Serve hot, with additional salt and pepper if needed.',
  },
];

export default function Instructions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Instructions</h2>
      <ol className={styles.list}>
        {listItems.map((item) => (
          <li key={item.step}>
            <strong>{item.step}: </strong>
            {item.details}
          </li>
        ))}
      </ol>
    </div>
  );
}
