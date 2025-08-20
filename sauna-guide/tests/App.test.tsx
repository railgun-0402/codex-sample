import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { saunas } from '../src/data/saunas';
import '@testing-library/jest-dom';

test('renders list', () => {
  render(<App />);
  const cards = screen.getAllByRole('button');
  expect(cards).toHaveLength(saunas.length);
});

test('keyword filter', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('キーワード'), {
    target: { value: '渋谷' }
  });
  const cards = screen.getAllByRole('button');
  expect(cards).toHaveLength(1);
  expect(screen.getByText('渋谷サウナ')).toBeInTheDocument();
});

test('prefecture filter', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('都道府県'), {
    target: { value: '東京都' }
  });
  const count = saunas.filter((s) => s.prefecture === '東京都').length;
  const cards = screen.getAllByRole('button');
  expect(cards).toHaveLength(count);
});

test('rating filter', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('最低評価'), {
    target: { value: '4.0' }
  });
  const count = saunas.filter((s) => s.rating >= 4.0).length;
  expect(screen.getAllByRole('button')).toHaveLength(count);
});

test('modal open/close', () => {
  render(<App />);
  const first = screen.getAllByRole('button')[0];
  fireEvent.click(first);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('close'));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
