# Sauna Guide

サウナ紹介ミニサイト。静的データを検索・絞り込みし、モーダルで詳細を表示する超ミニアプリ。

## 機能
- 施設一覧表示（名称、都道府県、サウナ温度、水風呂温度、主要設備タグ、★評価）
- キーワード/都道府県/★評価で検索・絞り込み
- カードクリックで詳細モーダル表示（説明、住所、営業時間、料金）

## セットアップ
```bash
npm i
npm run dev
npm run build
npm run preview
npm run test
```

## ディレクトリ構成
```
sauna-guide/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ README.md
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ types.ts
│  ├─ data/saunas.ts
│  ├─ components/
│  │  ├─ SearchBar.tsx
│  │  ├─ SaunaCard.tsx
│  │  ├─ Modal.tsx
│  │  └─ RatingStars.tsx
│  ├─ pages/
│  │  └─ Home.tsx
│  └─ styles/
│     └─ app.module.css
└─ tests/
   └─ App.test.tsx
```

## データの追加
`src/data/saunas.ts` に `Sauna` 型に沿って追加してください。

## 既知の制限と今後の拡張
- 画像や地図などは未対応
- 外部API連携、詳細ページ分割、地図表示などが今後の拡張例です。
