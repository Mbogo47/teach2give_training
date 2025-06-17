# Blog API Project

A simple RESTful API built with **Node.js, Express, Prisma, and PostgreSQL** that allows managing users and blog posts.

The project demonstrates:

- Creating and managing users
- Creating and managing blog posts
- Soft deletion of posts (logical delete using `isDeleted`)
- Prisma ORM with PostgreSQL as the database

## Technologies Used

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Faker.js (for generating dummy data)


## Endpoints

### Users

### GET `/users`

- Returns a list of all users.

**Response Example:**

```json
[
 {
        "id": "2a6fca70-88a8-469e-b2a7-666c53499142",
        "firstName": "Krystal",
        "lastName": "Johns",
        "emailAddress": "Cornelius_Schaden@hotmail.com",
        "username": "Annette_Kozey99"
    },
    {
        "id": "186a3dd8-17e1-49e3-9f08-de1db32f1561",
        "firstName": "Theresa",
        "lastName": "Orn",
        "emailAddress": "Bernadine75@gmail.com",
        "username": "Joyce.Crist63"
    },
    {
        "id": "39f59e98-fdce-4617-805b-ce1144ed9f4d",
        "firstName": "Dean",
        "lastName": "Waelchi",
        "emailAddress": "Johann3@hotmail.com",
        "username": "Alexandro_Kohler"
    },
]
```
### GET `/users/:id`
- Returns a single user by ID along with their blog posts.

**Response Example:**

```json
{
    "id": "9ccd7f5f-2181-45b3-88ef-a92364ac4161",
    "firstName": "Don",
    "lastName": "Osinski",
    "emailAddress": "Manuela9@hotmail.com",
    "username": "Hortense_Kling9",
    "posts": [
        {
            "id": "7719754f-14ad-4713-807d-f5f96f502594",
            "title": "Blandior asperiores cupiditas tamen vergo textus accedo officiis amplitudo distinctio.",
            "content": "Suffoco cohaero clam. Ulterius degusto ascisco perspiciatis tepidus super statim solus. Delinquo artificiose conventus alo.\nTriumphus uberrime crastinus thermae pecus. Illo virgo contigo venia cuppedia. Ago sumptus reiciendis titulus.",
            "createdAt": "2025-06-17T01:41:17.538Z",
            "lastUpdated": "2025-06-17T01:41:17.538Z",
            "isDeleted": false,
            "userId": "9ccd7f5f-2181-45b3-88ef-a92364ac4161"
        },
    ]
}
```

### POST `/users`
- Creates a new user.

**Response Body:**

```json
[
{
  "firstName": "John",
  "lastName": "Doe",
  "emailAddress": "john.doe@example.com",
  "username": "johnny"
}
]
```

### Posts


### GET `/posts`
- Returns a list of all posts (including author details).

Response Example:
```json
[
  {
    "id": "84b961a9-6c9a-4985-ae2e-79e23dc3a16c",
    "title": "Conturbo pecus thymbra tardus caelestis delibero absum trado aliqua.",
    "content": "Acsi vigor adversus cursus. Statua eveniet conitor theca decet suscipit. Ducimus viduo vaco tui distinctio sub inventore.\nAdhaero defleo ars beneficium. Surculus spes temperantia tot. Tactus dolore esse.",
    "createdAt": "2025-06-17T03:15:41.864Z",
    "lastUpdated": "2025-06-17T03:15:41.864Z",
    "isDeleted": false,
    "userId": "c8036b54-4d67-479d-a63e-7f7582fb4a06",
    "user": {
      "id": "c8036b54-4d67-479d-a63e-7f7582fb4a06",
      "firstName": "Robyn",
      "lastName": "Walker",
      "emailAddress": "Kamron_Treutel@gmail.com",
      "username": "Euna_Hagenes66"
    }
  },
  {
    "id": "b66d12aa-842a-4fbf-a85b-f625221122df",
    "title": "Vinculum accedo depraedor contigo.",
    "content": "Adnuo vomica nostrum contabesco adulatio. Quam solum comptus celer unus. Possimus tabernus sponte adiuvo.\nBlandior solvo triumphus spiculum verbum. Curtus tristis sunt aspicio. Adhuc claustrum vulticulus rem.",
    "createdAt": "2025-06-17T03:15:45.314Z",
    "lastUpdated": "2025-06-17T03:15:45.314Z",
    "isDeleted": false,
    "userId": "c8036b54-4d67-479d-a63e-7f7582fb4a06",
    "user": {
      "id": "c8036b54-4d67-479d-a63e-7f7582fb4a06",
      "firstName": "Robyn",
      "lastName": "Walker",
      "emailAddress": "Kamron_Treutel@gmail.com",
      "username": "Euna_Hagenes66"
    }
  },
]
```

### GET `/posts/:id`
- Returns a single post by ID with author details.

Response Example:
```json
{
  "id": "b66d12aa-842a-4fbf-a85b-f625221122df",
  "title": "Vinculum accedo depraedor contigo.",
  "content": "Adnuo vomica nostrum contabesco adulatio. Quam solum comptus celer unus. Possimus tabernus sponte adiuvo.\nBlandior solvo triumphus spiculum verbum. Curtus tristis sunt aspicio. Adhuc claustrum vulticulus rem.",
  "createdAt": "2025-06-17T03:15:45.314Z",
  "lastUpdated": "2025-06-17T03:15:45.314Z",
  "isDeleted": false,
  "userId": "c8036b54-4d67-479d-a63e-7f7582fb4a06",
  "user": {
    "id": "c8036b54-4d67-479d-a63e-7f7582fb4a06",
    "firstName": "Robyn",
    "lastName": "Walker",
    "emailAddress": "Kamron_Treutel@gmail.com",
    "username": "Euna_Hagenes66"
  }
}
```
### POST `/posts`
- Creates a new blog post with random lorem content.

Request Body:
```json
{
  "userId": "9ccd7f5f-2181-45b3-88ef-a92364ac4161"
}
```

### PUT `/posts/:id`
- Updates an existing post.

Request Body Example:
```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```
