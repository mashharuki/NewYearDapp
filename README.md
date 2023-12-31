# NewYearDapp

2024 年年賀状プロジェクトです！！

## 動かし方

- インストール

  ```bash
  pnpm i
  ```

  - `backend`側

    - コンパイル

      ```bash
      pnpm backend run compile
      ```

    - スマートコントラクトのデプロイ

      ```bash
      pnpm backend run deploy:fuji
      ```

    - スマートコントラクトを verify

      ```bash
      pnpm backend run verify:fuji
      ```

    - NFT をミントする

      ```bash
      pnpm backend run mint:fuji
      ```

  - `frontend`側

    - ビルド

      ```bash
      pnpm frontend run build
      ```

    - フロントエンド起動

      ```bash
      pnpm frontend run dev
      ```

## デプロイ済みのコントラクト情報

- Fuji

  - NFT: [0xeBd4B2c48C163cC30CDCaCe3B9b2237c7248a4f2](https://testnet.snowtrace.io/address/0xeBd4B2c48C163cC30CDCaCe3B9b2237c7248a4f2#code)
