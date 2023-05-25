# d_community_frontend

knalb コミュニティメディアのフロントエンドコード。

## Install

```shell
npm install
```

## Development

ローカル環境立ち上げ

```shell
npm run dev
```

### ブランチルール

リリースするまで

- mainブランチ
  - mainブランチの内容が自動デプロイされる。[dev環境への自動デプロイ用のアクション](https://github.com/developper-for-onplanetz/d_community_frontend/actions/workflows/auto_deploy_to_dev.yml) 
- その他の任意の名前のブランチ
  - main に向けてプルリクエストを送りマージする

リリースしたあと

- mainブランチ
  - リリース時に更新するブランチ。(例外としてREADME.mdの更新など実装に影響ない部分はmainに直接行っても良い)
- developブランチ
  - ここにマージされると自動的にdev環境へデプロイされる。リリース時にmainにマージする。
- その他の任意の名前のブランチ
  - developにマージするための開発ブランチ。

## デプロイ環境

### dev環境

URL: https://dqozrlw5kn21q.cloudfront.net/

Basic認証

ID: community

Pass: 1234567

### 本番環境

URL: https://knalb-community.com/

Basic認証

ID: community

Pass: 1234567