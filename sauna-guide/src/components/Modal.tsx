import { useEffect } from 'react';
import { Sauna } from '../types';
import styles from '../styles/app.module.css';

interface Props {
  sauna: Sauna | null;
  onClose: () => void;
}

export default function Modal({ sauna, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!sauna) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="close">
          ×
        </button>
        <h2>{sauna.name}</h2>
        <p>{sauna.description}</p>
        <p>
          <strong>住所:</strong> {sauna.address}
        </p>
        <p>
          <strong>営業時間:</strong> {sauna.hours}
        </p>
        <p>
          <strong>料金:</strong> {sauna.priceRange}
        </p>
      </div>
    </div>
  );
}
