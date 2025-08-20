import styles from '../styles/app.module.css';

interface Props {
  keyword: string;
  prefecture: string;
  rating: number;
  prefectures: string[];
  onKeywordChange: (v: string) => void;
  onPrefectureChange: (v: string) => void;
  onRatingChange: (v: number) => void;
}

export default function SearchBar({
  keyword,
  prefecture,
  rating,
  prefectures,
  onKeywordChange,
  onPrefectureChange,
  onRatingChange
}: Props) {
  return (
    <div className={styles.searchBar}>
      <input
        aria-label="キーワード"
        type="text"
        value={keyword}
        placeholder="キーワード"
        onChange={(e) => onKeywordChange(e.target.value)}
      />
      <select
        aria-label="都道府県"
        value={prefecture}
        onChange={(e) => onPrefectureChange(e.target.value)}
      >
        <option value="">全ての都道府県</option>
        {prefectures.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <input
        aria-label="最低評価"
        type="number"
        min="0"
        max="5"
        step="0.1"
        value={rating}
        placeholder="評価"
        onChange={(e) => onRatingChange(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}
