import styles from './PreparationTime.module.css';

const listItem = [
  {
    title: 'Total',
    time: 'Approximately 10 minutes',
  },
  {
    title: 'Preparation',
    time: '5 minutes',
  },
  {
    title: 'Cooking',
    time: '5 minutes',
  },
];

export default function PreparationTime() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Preparation Time</h2>
      <ul className={styles.timeList}>
        {listItem.map((item) => (
          <li key={item.title}>
            <strong>{item.title}: </strong>
            {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
