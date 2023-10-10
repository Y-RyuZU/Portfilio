FROM node:latest

# ワーキングディレクトリの設定
WORKDIR app

# 依存関係ファイルをコピー
COPY package.json .

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# 5173ポートを公開
EXPOSE 5173

# Vue.jsの開発サーバを起動
CMD [npm, run, dev, --port, 5173]
