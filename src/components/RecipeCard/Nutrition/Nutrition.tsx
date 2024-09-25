import styles from './Nutrition.module.css';

const nutritionData = [
  { name: 'Calories', value: '277kcal' },
  { name: 'Carbs', value: '0g' },
  { name: 'Protein', value: '20g' },
  { name: 'Fat', value: '22g' },
];

export default function Nutrition() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nutrition</h2>
      <p className={styles.description}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className={styles.table}>
        <tbody>
          {nutritionData.map((data) => (
            <tr key={data.name}>
              <td className={styles.name}>{data.name}</td>
              <td className={styles.value}>{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
