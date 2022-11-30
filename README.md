
# Book Record Management

Book Record Management project developed using Express and MongoDB.

-- Knowledge about Routing.

## Acknowledgements

 - Internhip / Training Program :- @ Devtown
 - Guided By :- Aditya Gusain Sir.


## API Reference

## Users

#### 1. Create User

```http
  POST /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `string` | Register User |

#### 2. Get User by id

```http
  GET /users/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Get user on basis of id. |

#### 3. Delete User

```http
  DELETE /users/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Delete user on basis of id. |

#### 4. User subscription details

```http
  GET /users/subscription-details/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Subscription details on basis of id. |


## Books

#### 1. Create new book

```http
  POST /books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `string` | Create new book |

#### 2. Get all books

```http
  GET /books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `string` | Get all books details. |

#### 3. Get books by id

```http
  GET /books/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Get books on basis of id. |


## Tech Stack

**Server:** Express

**Database:** MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.


`MONGO_URI`
## 🔗 Link
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-sachin-deshmukh/)



## Authors

- [@abhishekdeshmukh001](https://github.com/abhishekdeshmukh001)

