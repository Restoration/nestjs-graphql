# README

Nest.jsとGraphQLを使用したテストリポジトリ。スキーマ駆動開発用。

## 立ち上げ
```
$ make init
$ make docker
$ yarn
$ yarn build
$ yarn migration:run
$ yarn start:dev
```

`http://localhost:3000/graphql`にアクセスしてプレイグラウンド立ち上げ


## Query&Mutation
取得
```
{
  todos{
    id
    name
    createdAt
  }
}
```

id検索
```
{
  getToDo(id: 2){
    id
    name
    createdAt
  }
}
```

作成
```
mutation {
  addToDo(addToDo: {name: "test"}){
    id
    name
    createdAt
  }
}
```

削除
```
mutation {
  removeToDo(id: 5)
}
```