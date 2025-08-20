import { useState, useMemo } from 'react';
import { saunas } from '../data/saunas';
import SearchBar from '../components/SearchBar';
import SaunaCard from '../components/SaunaCard';
import Modal from '../components/Modal';
import { Sauna } from '../types';
import styles from '../styles/app.module.css';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState<Sauna | null>(null);

  const prefectures = useMemo(
    () => Array.from(new Set(saunas.map((s) => s.prefecture))),
    []
  );

  const filtered = useMemo(
    () =>
      saunas.filter(
        (s) =>
          (keyword === '' ||
            s.name.includes(keyword) ||
            s.description.includes(keyword)) &&
          (prefecture === '' || s.prefecture === prefecture) &&
          (rating === 0 || s.rating >= rating)
      ),
    [keyword, prefecture, rating]
  );

  return (
    <div className={styles.container}>
      <SearchBar
        keyword={keyword}
        prefecture={prefecture}
        rating={rating}
        prefectures={prefectures}
        onKeywordChange={setKeyword}
        onPrefectureChange={setPrefecture}
        onRatingChange={setRating}
      />
      <div className={styles.grid}>
        {filtered.map((s) => (
          <SaunaCard key={s.id} sauna={s} onSelect={setSelected} />
        ))}
      </div>
      <Modal sauna={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
