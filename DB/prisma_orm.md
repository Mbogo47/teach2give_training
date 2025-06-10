# PRISMA ORM
## What is Prisma ORM?
- **Prisma ORM** is a next-generation tool designed to simplify database interactions for Node.js and TypeScript applications. It offers a modern approach to database management, making it an attractive choice for developers seeking efficiency and reliability.


## Benefits of Using an ORM﻿
- **Productivity**: Reduces the amount of boilerplate code for database interactions.

- **Portability**: Makes it easier to switch databases without significant code changes.

- **Security**: Helps prevent SQL Injection by using parameterized queries.

- **Maintenance**: Simplifies the maintenance of database interactions and schema changes.

## Core Components of Prisma
- Prisma consists of three main tools:
  - **Prisma Client**: An auto-generated and type-safe query builder for Node.js and TypeScript. It provides a clean API for database operations, ensuring that queries are both efficient and error-free.
  
  - **Prisma Migrate**: A powerful data modeling and migration system that allows you to define your database schema declaratively. It simplifies the process of evolving your database schema over time.
    
  - **Prisma Studio**: A graphical user interface (GUI) that lets you view and edit data in your database. This tool enhances productivity by providing a visual representation of your data.
 
### Installing prisma
```
npm install prisma -D
```

### Setting Up Prisma
```
npx prisma init --datasource-provider DATABASE
```
- This command does:-
    - Creates a new directory called prisma that contains the file schema.prisma, which contains our database connection variables and models.

  - Creates a .env file at the root of the project which is used for defining the environment variables such as the connection string.

    - The `.env` will have :
      ```
      DATABASE_URL="postgresql://postgres:1234@localhost:5432/hospital_db"
      ```



## Models﻿

- **Models** represent the different tables in your database. They are made up of fields (fields correspond to the columns in our database).

### Key concepts of Prisma Models﻿
- **Data Models**: Define the tables and their columns (fields) in your database.

- **Field Types**: Specify the data types for each field (e.g., String, Int, Boolean).

- **Relations**: Describe how models relate to each other using relation fields.

- **Attributes**: Add additional metadata to fields and models using attributes like `@id`, `@default`, `@relation`.

    
### Creating Models
  ```
model Patient {
  id        Int     @id @default(autoincrement())
  name      String
  email     String  @unique
  phone     String?
  createdAt DateTime @default(now())
  appointments Appointment[]
}
```


### Migrations
- **Migrations** are versioned files that describe changes to your database schema. They are a way to manage and apply changes to your database in a controlled and consistent way.

>``` bash
> npx prisma migrate dev --name MIGRATION-NAME
> ```

### Prisma Clients

- The **Prisma Client** is an auto-generated and type-safe database client that you use to interact with your database in a Node.js or TypeScript application. It’s generated based on the models you define in your Prisma schema (schema.prisma) and provides a simple, intuitive, and type-safe API for CRUD operations, filtering, pagination, and more.

- To generate a prisma client:-
  
```
npx prisma generate
```

### CRUD OPERATIONS
#### CREATE

### Create a single record using create()﻿
``` 
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

async function createPatient() {
  const patient = await client.patient.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    },
  });

  console.log('New Patient:', patient);
}
createPatient();
```

### Create multiple records using createMany()﻿
``` 
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const createPatients() = async () => {
  const patients = await prisma.client.createMany({
    data: [
      { name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '123-456-7890'
      },
      { name: 'Bob Smith',
        email: 'bob@example.com',
        phone: '987-654-3210'
      },
      { name: 'Charlie Brown',
        email: 'charlie@example.com',
        phone: '555-123-4567'
      },
    ],
  });
  console.log('Patients Added:', patients);
}

createPatients();
```


#### READ
### Get all records using findMany()﻿
```
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const getAllPatients() = async () => {
  const patients = await client.patient.findMany();
  console.log('All Patients:', patients);
}

getAllPatients();
```

### Applying the AND operator to select only records that match multiple criterias﻿
```
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const getFilteredPatients() = async () => {
  const patients = await client.patient.findMany({
    where: {
      AND: [
        { name: 'Alice Johnson' },
        { email: 'alice@example.com' },
      ],
    },
  });

  console.log('Filtered Patients:', patients);
}

getFilteredPatients();
```
#### UPDATE
#### Update a single record using update()﻿
```
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const updatePatient() = async () => {
  const updatedPatient = await client.patient.update({
    where: {
      email: 'alice@example.com', 
    },
    data: {
      phone: '111-222-3333', 
    },
  });

  console.log('Updated Patient:', updatedPatient);
}

updatePatient();
```

#### Update multiple records using updateMany()﻿
```
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const updateMultiplePatients() = async () => {
  const updatedPatients = await client.patient.updateMany({
    where: {
      name: 'Alice Johnson', 
    },
    data: {
      phone: '999-888-7777',
    },
  });

  console.log('Updated Patients:', updatedPatients);
}

updateMultiplePatients();;
```
#### DELETE
#### Delete a single record using delete()﻿
```
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const deletePatient() = async () => {
  const deletedPatient = await client.patient.delete({
    where: {
      email: 'alice@example.com',
    },
  });

  console.log('Deleted Patient:', deletedPatient);
}

deletePatient();
```

#### Delete multiple records using deleteMany()﻿
```
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const deleteMultiplePatients() = async () => {
  const deletedPatients = await prisma.patient.deleteMany({
    where: {
      name: 'Alice Johnson', // Deletes all patients with this name
    },
  });

  console.log('Deleted Patients:', deletedPatients);
}

deleteMultiplePatients();

```

### Relationships
- The types of relationships include:

   - **one-to-one relationship (1-1)**: means that one record in a table is associated to only one record in another table.

  - **one-to-many relationship (1-n)**: means that one record in a table can be associated with multiple other records in another table.

  - **many-to-many relationship (m-n)**: means that multiple records in one table can be associated to multiple records in another table.
