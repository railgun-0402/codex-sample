import { Sauna } from '../types';
import RatingStars from './RatingStars';
import styles from '../styles/app.module.css';

interface Props {
  sauna: Sauna;
  onSelect: (s: Sauna) => void;
}

export default function SaunaCard({ sauna, onSelect }: Props) {
  return (
    <button
      className={styles.card}
      onClick={() => onSelect(sauna)}
      aria-label={`${sauna.name}の詳細`}
    >
      <h3>{sauna.name}</h3>
      <p>{sauna.prefecture}</p>
      <p>
        サウナ {sauna.saunaTemp}℃ / 水風呂 {sauna.coldBathTemp}℃
      </p>
      <RatingStars rating={sauna.rating} />
      <p>{sauna.amenities.join(', ')}</p>
    </button>
  );
}
