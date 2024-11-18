# Barba.js トランジションデモ

## 概要
このプロジェクトは、Barba.jsを使用したページトランジションのデモサイトです。
アニメーションにはanime.jsを使用しています。

## インストール方法
1. リポジトリをクローン
```bash
git clone [リポジトリURL]
```

2. 依存パッケージをインストール
```bash
npm install
# または
yarn install
```

## 開発方法
開発サーバーを起動：
```bash
npm run dev
# または
yarn dev
```

## ビルド方法
本番用ビルドを実行：
```bash
npm run build
# または
yarn build
```

## プロジェクト構成
```
src/
├── js/
│   ├── common.js      # メインのJavaScriptファイル
│   ├── modules/       # モジュール
│   └── pages/         # 各ページ固有のスクリプト
├── scss/
│   └── style.scss     # スタイルシート
└── index.html         # メインのHTMLファイル
```

## 使用している主な技術
- [Barba.js](https://barba.js.org/) - ページトランジション
- [anime.js](https://animejs.com/) - アニメーション
- [Vite](https://vitejs.dev/) - ビルドツール
- Sass - CSSプリプロセッサー

## 機能
- ページ間のスムーズなトランジション
- メタタグの動的更新
- ページ固有のJavaScript実行

## ビルド設定
`vite.config.js`でビルド設定を管理しています。ビルド後のファイルは`docs`ディレクトリに出力されます。