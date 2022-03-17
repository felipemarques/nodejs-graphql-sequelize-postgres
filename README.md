# nodejs-graphql-sequelize-postgres

![image](https://user-images.githubusercontent.com/2640656/158885682-e57d2bde-0ffd-4f9d-82ff-c2915371e3d0.png)

![image](https://user-images.githubusercontent.com/2640656/158885769-e092f7a9-aee1-4761-9e3e-dc7f6cfc79a7.png)

# how to run this repo

`$ docker-compose up -d`

`$ yarn run sequelize-cli db:migrate`

# Register User

```
mutation register {
  register(input: {
    email: "test@test.com",
    password: "1234",
    name: "Jon Doe"
  }) {
    id,
    name,
    email
  }
}
```

# Login to get Token

```
mutation login {
  login(input: {email: "contato@felipemarques.com.br", password: "1234"} ) {
    id
    name
    token
  }
}
```

# Register Post

```
mutation createPost {
  
  createPost(title: "Meu post", content: "new post content") {
    id,
    title,
    content,
    createdAt
  }
  
}
```
