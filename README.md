learning-spa
============
オライリー・ジャパンから発行されている書籍：

**「シングルページWebアプリケーション - Node.js、MongoDBを活用したJavaScriptSPA」**
http://www.oreilly.co.jp/books/9784873116730/

で取り扱われている、チャットアプリケーションの写経コードです。

#### 動作手順

##### 確認環境
|項目|バージョン|
|:-:|:--:|
| OS |  Mac OS X 10.10.1 (Yosemite) |
| Node.js | v0.10.31 |
| MongoDB | v2.6.6 |
| ブラウザ | Chrome 39.0.2171.95 |

##### mongodb サーバのインストールと起動

```
brew install mongdb
sudo mongod --config /usr/local/etc/mongod.conf &
```

##### Node.js のインストールとWebサーバの起動

```
brew install node
git clone https://github.com/myokota/learning-spa.git
cd learning-spa
npm install
node app.js
```

##### クライアント

1. WebSocket に対応したブラウザを開き、localhost:3000 にアクセス
2. ページ右上の「Please sign-in」を押下後、表示されるダイアログにユーザ名を入力
3. 新しいタブを開いて1.と2.を行う(ユーザ名は別にする）
4. 右下に「Chat」ウィンドウがオープンする
  * ウィンドウ左ペインが別ユーザリスト
  * ウィンドウ右上ペインがチャット履歴
  * ウィンドウ右下が送信メッセージエリア
5. 相手ユーザを選択後、送信メッセージエリアから送信可能
6. Chat ウィンドウ外はユーザのアバター（といってもユーザ名のテキストのみ)の表示領域
  * アバターを１クリックで背景色が変化
  * アバター長押しで移動可能
7. 複数ユーザで同時にチャット可能

##### その他

* 第8章まで写経済み
