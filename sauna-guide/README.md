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

## 依頼したプロンプト

```
# 目的
既存リポジトリ内に、React + TypeScript の「サウナ紹介ミニサイト」を新規作成してください。
ユーザーが一覧から施設を検索/絞り込みし、詳細をモーダルで閲覧できる超ミニ版です。
作業完了後は Pull Request を作成してください。

# 前提・制約
- 新規アプリは専用フォルダに作成します。
  - /apps/sauna-guide が存在する場合はここに
  - なければ /sauna-guide をリポジトリ直下に作成
- 既存コードは変更しないこと（編集範囲は新規フォルダ配下のみ）。
- 追加依存は最小限（Vite + React + TypeScript + Vitest + @testing-library/react）。
  UI は素朴な CSS（CSS Modules など）でよい。Tailwind等は入れない。
- インターネットアクセスは不要。ローカル作業のみで完結させる。
- Node / npm / pnpm は既存プロジェクトに合わせる（なければ npm を使用）。

# 技術スタック
- Vite + React + TypeScript
- テスト: Vitest + @testing-library/react + jsdom

# 機能要件（MVP）
1) 一覧表示：施設カード（名称 / 都道府県 / サウナ温度 / 水風呂温度 / 主要設備タグ / ★評価）
2) 検索・絞り込み：
   - キーワード（名称・説明に部分一致）
   - 都道府県のドロップダウン
   - ★評価の下限（例: 3.5 以上）
3) 詳細表示：
   - 施設カードをクリックするとモーダルで詳細表示（説明文 / 住所 / 営業時間 / 料金の目安）
   - モーダルは Esc / 背景クリックで閉じる
4) データ：
   - src/data/saunas.ts に静的データを定義（最低 8 件）
   - 型は src/types.ts に定義（Sauna 型：id, name, prefecture, saunaTemp, coldBathTemp, rating, amenities: string[], description, address, hours, priceRange）
5) アクセシビリティ：
   - ボタンに aria-label、モーダルは role="dialog"、閉じるボタンを必ず用意

# 非機能要件
- ESLint/Prettier は不要（時間短縮）。代わりに基本的な型安全を保つ。
- npm scripts: dev, build, preview, test を用意。
- README.md にセットアップ・起動・テスト・構成・拡張方法を明記。

# 生成するおおまかな構成（例）
[apps/sauna-guide] または [sauna-guide]
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ README.md
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ types.ts
   ├─ data/saunas.ts
   ├─ components/
   │   ├─ SearchBar.tsx
   │   ├─ SaunaCard.tsx
   │   ├─ Modal.tsx
   │   └─ RatingStars.tsx
   ├─ pages/
   │   └─ Home.tsx
   └─ styles/
       └─ app.module.css
└─ tests/
   └─ App.test.tsx

# 実装方針（ざっくり）
- Home.tsx：検索フォーム + 絞り込みロジック + カードグリッド
- SearchBar.tsx：keyword / prefecture / rating の3入力を受けて親に通知
- SaunaCard.tsx：最低限のスタイルでカード表示
- Modal.tsx：ポータル不要の簡易モーダル（キーハンドリングあり）
- RatingStars.tsx：評価を★表示（半端は四捨五入でOK）
- フィルタロジックは useMemo で最小限の最適化
- 画像は不要。サムネイルはプレースホルダ（背景グラデ or 絵文字等）

# README.md（この内容を生成して書き込むこと）
- プロジェクト概要（サウナ紹介ミニサイト / 機能一覧）
- 要件（検索・絞り込み・モーダル表示）
- セットアップ
  - npm i
  - npm run dev / build / preview / test
- ディレクトリ構成
- データの追加方法（src/data/saunas.ts に追加）
- 既知の制限と今後の拡張例（地図連携、詳細ページ分割、API化など）

# テスト（Vitest + RTL）
以下の最小テストを tests/App.test.tsx に作成して通してください。
- renders list: 初期表示でデータ件数がカード数に一致する
- keyword filter: 「渋谷」などのキーワード入力で該当カードのみになる
- prefecture filter: 都道府県を「東京都」にすると東京都の施設だけになる
- rating filter: 下限 4.0 にすると 4.0 以上の施設だけになる
- modal open/close: 1件クリックで詳細モーダルが開き、閉じるボタンで閉じる

# スクリプト
package.json に以下を定義：
- dev: vite
- build: vite build
- preview: vite preview
- test: vitest --environment jsdom

# 受け入れ基準（チェックリスト）
- [ ] npm run dev で一覧/検索/詳細が機能する
- [ ] テスト 5 本が緑
- [ ] README に起動/テスト/構成が記載
- [ ] 変更は新規フォルダ配下のみ
- [ ] CI なしでもローカルで動作確認できる

# PR 方針（自動化してよい）
- ブランチ名: feat/sauna-guide
- コミットメッセージ（Conventional Commits）: feat(sauna-guide): create React + TS sauna catalog
- PR タイトル: feat(sauna-guide): initial sauna catalog app
- PR 説明には以下を含める：
  - 目的 / スクショ（トップとモーダル）
  - 実装内容（主要ファイルと責務）
  - 動作確認（dev/preivew コマンド、テスト結果）
  - 影響範囲：新規フォルダ配下のみ

# 完了操作
- すべてのファイルを保存し、tests が通ることを確認したら、
  右上の「Create Pull Request」から PR を作成してください。
  ボタンが見当たらない場合は PR を作成するための操作を案内・実行してください。

```
