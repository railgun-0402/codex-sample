import styles from '../styles/app.module.css';

interface Props {
  rating: number;
}

export default function RatingStars({ rating }: Props) {
  const filled = Math.round(rating);
  return (
    <span className={styles.stars} aria-label={`評価 ${rating.toFixed(1)}`}>
      {'★'.repeat(filled)}{'☆'.repeat(5 - filled)}
    </span>
  );
}
