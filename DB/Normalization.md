# DATA NORMALIZATION

- **Database normalization** is a database design principle for organizing data in an organized and consistent way to avoid redundancy and maintain the integrity of the database.

- In simpler terms, it involves breaking down a large, complex table into smaller and simpler tables while maintaining data relationships.

## Why is Normalization in SQL Important?
- **Reduces redundancy**: Redundancy is when the same information is stored multiple times, and a good way of avoiding this is by splitting data into smaller tables.

- **Improves query performance**: You can perform faster query execution on smaller tables that have undergone normalization.

- **Minimizes update anomalies**: With normalized tables, you can easily update data without affecting other records.
 
- **Enhances data integrity**: It ensures that data remains consistent and accurate.

## Where Normalization is used.
- **Data Integrity**:  Normalization helps maintain accurate and consistent data by organizing it into separate tables connected through unique identifiers. This reduces the chances of anomalies and inconsistencies.

- **Efficiency querying**: Although joins may seem complex, normalization simplifies queries by structuring data into smaller, focused tables. This makes it easier to retrieve relevant information without unnecessary data duplication.

- **Storage Optimazation **Redundant data wastes storage space. For example, storing the same product details in every order record leads to duplication. Normalization reduces this by separating such data into related tables, thus minimizing storage use.


## Factors Leading to the Need for Normalization

- **Insertion, Deletion, and Update Anomalies**: Without proper structure, adding, modifying, or removing data can cause errors or inconsistencies. For instance, deleting a record might unintentionally remove valuable information, or inserting new data might require duplicating existing information.

- **Complex Relationship Management**: An unnormalized database makes it difficult to manage relationships between different data points, leading to confusion and inefficiency.

- **Partial and Transitive Dependencies**:

  - *Partial Dependencies* can result in data redundancy and update anomalies, where the same data is unnecessarily repeated across records.
  - *Transitive Dependencies* may introduce indirect relationships that lead to inconsistent data and maintenance challenges.

## Types of Database Normalization

### First Normal Form (1NF)
 - 1NF ensures that each column contains only atomic (indivisible) values. In simpler terms, each cell should hold a single piece of data—no lists or grouped values. Additionally, columns must have unique names, and the order in which data is stored does not affect the integrity.

### Second Normal Form (2NF)
 - Building on 1NF, 2NF eliminates partial dependencies, meaning that every non-key attribute must depend on the entire primary key—not just part of it. This is especially important in tables with composite keys, where some columns might only relate to part of the key.

### Third Normal Form (3NF)
 - 3NF takes normalization further by removing transitive dependencies—where non-key attributes depend on other non-key attributes instead of directly on the primary key. This helps ensure that every non-key column is only dependent on the primary key.

### Boyce-Codd Normal Form (BCNF)
 - An enhancement of 3NF, BCNF addresses anomalies not handled by 3NF. It requires that every determinant (an attribute that determines another) must be a candidate key, strengthening the consistency of the schema.

### Fourth Normal Form (4NF)
 - 4NF extends BCNF by eliminating multi-valued dependencies. It ensures that independent sets of data are not stored in the same table, thus avoiding redundancy when a single key relates to multiple independent values.

### Fifth Normal Form (5NF)
- Also known as Projection-Join Normal Form, 5NF handles join dependencies. It breaks down tables into the smallest possible pieces without losing data or meaning, and is mainly applied in complex scenarios where further decomposition is needed to eliminate redundancy.

![normalization](norma.avif)

## EXAMPLES
### First Normal Form (1NF) Normalization
- Each column should have only one value per cell—no lists or grouped data. Think of it like a rule that says: "One cell, one fact." Also, column names should be unique.
- 1NF ensures that each column cell contains only **atomic values**, meaning each cell holds a single, indivisible piece of data.

### Example of a Table that Violates 1NF

Imagine a library database storing book information such as title, author, genre, and who borrowed the book. In a non-normalized table, the `borrowed_by` column might contain multiple names separated by commas, like this:

| Title                                  | Author            | Genre   | Borrowed_By                          |
|----------------------------------------|--------------------|---------|--------------------------------------|
| To Kill a Mockingbird                  | Harper Lee         | Fiction | John Doe, Jane Doe, James Brown      |
| The Lord of the Rings                  | J. R. R. Tolkien   | Fantasy | Emily Garcia, David Lee              |
| Harry Potter and the Sorcerer’s Stone | J.K. Rowling       | Fantasy | Michael Chen                         |

This table violates **1NF** because the `borrowed_by` column contains multiple values in a single cell.

---

### The Solution

To comply with 1NF, we separate the data into two related tables:

- A **Books** table
- A **Borrowers** table

Each borrower is listed individually, and the tables are linked using a foreign key (`book_id`) in the Borrowers table that references the Books table.

---

###  Books Table

| book_id (PK) | Title                                  | Author           | Genre   |
|--------------|----------------------------------------|------------------|---------|
| 1            | To Kill a Mockingbird                  | Harper Lee       | Fiction |
| 2            | The Lord of the Rings                  | J. R. R. Tolkien | Fantasy |
| 3            | Harry Potter and the Sorcerer’s Stone  | J.K. Rowling     | Fantasy |

---

###  Borrowers Table

| borrower_id (PK) | Name           | book_id (FK) |
|------------------|----------------|--------------|
| 1                | John Doe       | 1            |
| 2                | Jane Doe       | 1            |
| 3                | James Brown    | 1            |
| 4                | Emily Garcia   | 2            |
| 5                | David Lee      | 2            |
| 6                | Michael Chen   | 3            |



- By organizing the data this way, we maintain atomicity, eliminate redundancy, and enforce a consistent relationship between books and borrowers—exactly what First Normal Form requires.


###  Second Normal Form (2NF) Normalization
- This level makes sure that all data in a table depends on the whole primary key, not just part of it. It helps avoid repeating the same information in different rows.

- 2NF builds on 1NF by eliminating **partial dependencies**. This means every non-key attribute must depend on the **entire primary key**, not just part of it.

From our 1NF implementation, we had two tables: `Books` and `Borrowers`.

#### A Common Mistake

- A flawed attempt to link borrowers to books might look like this:

####  Books Table (Violates 2NF)

| book_id (PK) | Title                                  | Author            | Genre   | borrower_id (FK) |
|--------------|----------------------------------------|-------------------|---------|------------------|
| 1            | To Kill a Mockingbird                  | Harper Lee        | Fiction | 1                |
| 2            | The Lord of the Rings                  | J. R. R. Tolkien  | Fantasy | NULL             |
| 3            | Harry Potter and the Sorcerer’s Stone | J.K. Rowling      | Fantasy | 6                |

This structure is problematic because `borrower_id` only **partially** depends on `book_id`. A book can have multiple borrowers, but the current table design only allows one. This is a classic partial dependency, violating 2NF.


### The Solution: Use a Linking Table

To model a proper **many-to-many** relationship between books and borrowers, we introduce a `book_borrowings` table.

####  Book_Borrowings Table

| borrowing_id (PK) | book_id (FK) | borrower_id (FK) | borrowed_date |
|-------------------|--------------|------------------|----------------|
| 1                 | 1            | 1                | 2024-05-04     |
| 2                 | 2            | 4                | 2024-05-04     |
| 3                 | 3            | 6                | 2024-05-04     |

This design ensures that all non-key attributes depend on the entire composite key (book_id and borrower_id), satisfying **Second Normal Form**.



### Third Normal Form (3NF) Normalization

- 3NF builds on 2NF by removing **transitive dependencies** i.e we remove any indirect relationships between columns. Every column should only depend on the primary key, not on other columns.
- A **transitive dependency** happens when a non-key attribute depends on another non-key attribute instead of directly on the primary key.


####  Current Structure from 2NF

Our library database currently has three tables:

####  Books Table

| book_id (PK) | title                                 | author          | genre   |
|--------------|----------------------------------------|------------------|---------|
| 1            | To Kill a Mockingbird                 | Harper Lee       | Fiction |
| 2            | The Lord of the Rings                 | J.R.R. Tolkien   | Fantasy |
| 3            | Harry Potter and the Sorcerer’s Stone | J.K. Rowling     | Fantasy |

#### Borrowers Table

| borrower_id (PK) | name           | book_id (FK) |
|------------------|----------------|--------------|
| 1                | John Doe       | 1            |
| 2                | Jane Doe       | 1            |
| 3                | James Brown    | 1            |
| 4                | Emily Garcia   | 2            |
| 5                | David Lee      | 2            |
| 6                | Michael Chen   | 3            |

####  Book_Borrowings Table

| borrowing_id (PK) | book_id (FK) | borrower_id (FK) | borrowed_date |
|-------------------|--------------|------------------|----------------|
| 1                 | 1            | 1                | 2024-05-04     |
| 2                 | 2            | 4                | 2024-05-04     |
| 3                 | 3            | 6                | 2024-05-04     |

---

####  The Problem

Suppose we add a `due_date` column to the **Books** table.

This creates a **transitive dependency**:

- `due_date` depends on `borrowing_id` (non-key),
- which in turn depends on `book_id` (primary key).

 This violates 3NF, because `due_date` no longer depends **directly** on the primary key (`book_id`), but through another non-key attribute (`borrowing_id`).



####  The Solution

Move `due_date` (and optionally `returned_date`) to the `book_borrowings` table, where it naturally belongs.

####  Updated Book_Borrowings Table

| borrowing_id (PK) | book_id (FK) | borrower_id (FK) | borrowed_date | due_date    |
|-------------------|--------------|------------------|----------------|-------------|
| 1                 | 1            | 1                | 2024-05-04     | 2024-05-20  |
| 2                 | 2            | 4                | 2024-05-04     | 2024-05-18  |
| 3                 | 3            | 6                | 2024-05-04     | 2024-05-10  |


####  Why This Works

By storing `due_date` in the `book_borrowings` table:

- It now directly depends on the **composite key** (`book_id`, `borrower_id`).
- We've removed the transitive link through `borrowing_id`.
- The structure now satisfies **Third Normal Form (3NF)**.

In other words, all non-key columns now depend **only on the whole key, and nothing but the key**.

### Boyce-Codd Normal Form (BCNF)

**BCNF** is an advanced version of **3NF** that focuses more strictly on **functional dependencies** and **candidate keys**.


####  Functional Dependencies (FDs)

A **functional dependency (FD)** means that the value of one attribute (or set of attributes) determines the value of another.  
For example:  
If `X → Y`, then knowing `X` allows us to determine `Y`.

FDs guide the normalization process by helping identify and eliminate unnecessary redundancy in tables.



####  What Is BCNF?

BCNF requires that:

- For every non-trivial functional dependency `X → Y`, `X` must be a **superkey** (i.e., a candidate key or part of one).

This ensures that **every determinant** (the left side of an FD) can act as a key — meaning it **uniquely identifies a record**.

BCNF is stricter than 3NF. While 3NF allows some non-prime attributes to exist if they depend on a candidate key, BCNF **does not**.


#### Example Schema (From 3NF)

We continue using the same tables from 3NF:

#### Books Table

| book_id (PK) | title                                 | author         | genre   |
|--------------|----------------------------------------|----------------|---------|
| 1            | To Kill a Mockingbird                 | Harper Lee     | Fiction |
| 2            | The Lord of the Rings                 | J.R.R. Tolkien | Fantasy |
| 3            | Harry Potter and the Sorcerer’s Stone | J.K. Rowling   | Fantasy |

#### Borrowers Table

| borrower_id (PK) | name         | book_id (FK) |
|------------------|--------------|--------------|
| 1                | John Doe     | 1            |
| 2                | Jane Doe     | 1            |
| 3                | James Brown  | 1            |
| 4                | Emily Garcia | 2            |
| 5                | David Lee    | 2            |
| 6                | Michael Chen | 3            |

#### Book_Borrowings Table

| borrowing_id (PK) | book_id (FK) | borrower_id (FK) | borrowed_date | due_date    |
|-------------------|--------------|------------------|----------------|-------------|
| 1                 | 1            | 1                | 2024-05-04     | 2024-05-20  |
| 2                 | 2            | 4                | 2024-05-04     | 2024-05-18  |
| 3                 | 3            | 6                | 2024-05-04     | 2024-05-10  |



#### The Problem

Assume a borrower **cannot borrow the same book more than once at the same time**.  
That means the combination `(book_id, borrower_id)` uniquely identifies a borrowing.

This makes `(book_id, borrower_id)` a **determinant**, but it is **not the primary key** (which is `borrowing_id`).  
This **violates BCNF**, because the determinant isn't a superkey.


#### The Solution

####  Approach 1: **Decompose the Table**

Split the `book_borrowings` table into two:

1. **Borrowing Events Table**  
   Stores details about each borrowing instance:
   - `borrowing_id` (PK)
   - `borrowed_date`
   - `due_date`
   - `returned_date` (optional)

2. **Borrowing Links Table**  
   Connects borrowers and books:
   - `book_id` (FK)
   - `borrower_id` (FK)
   - `borrowing_id` (FK)

This way, all functional dependencies are properly modeled and BCNF is satisfied.

####  Approach 2: **Use a Composite Primary Key**

Make `(book_id, borrower_id)` the **composite primary key** of the `book_borrowings` table.

However, this only works if **a borrower cannot borrow the same book more than once**.

If re-borrowing is allowed, this approach fails because it wouldn't uniquely identify multiple borrowings of the same book by the same person.


####  Final Thoughts

Your choice between these two approaches depends on your system’s rules:

- If **re-borrowing is allowed**, **decomposition** is the safer approach.
- If each borrower can only borrow a specific book **once at a time**, a **composite key** may be enough.

Either way, applying BCNF helps eliminate hidden redundancies and improves data integrity.
Let me know if you want a downloadable version or if you’d like this as part of a full normalization guide!


### Fourth Normal Form (4NF)

4NF deals with **multi-valued dependencies (MVDs)**.  

#### What is a Multi-Valued Dependency?

- A **multi-valued dependency** exists when:

    - One attribute (or set of attributes) determines multiple independent attributes.
    - These dependent attributes are independent **of each other** and independent of the primary key.

This can cause redundancy and anomalies if not properly normalized.


#### Example Scenario: Publications Database

| publication_id (PK) | title                    | author       | publication_year | keywords                      |
|---------------------|--------------------------|--------------|------------------|-------------------------------|
| 1                   | To Kill a Mockingbird    | Harper Lee   | 1960             | Coming-of-Age, Legal           |
| 2                   | The Lord of the Rings    | J. R. R. Tolkien | 1954          | Fantasy, Epic, Adventure       |
| 3                   | Pride and Prejudice      | Jane Austen  | 1813             | Romance, Social Commentary     |

**Issue:**  
The `keywords` column stores multiple values (multi-valued dependency) related to `publication_id`. Each keyword is independent and unrelated to others.

This violates 4NF because the multi-valued attribute `keywords` depends on `publication_id` but is not a proper atomic attribute.


#### Solution: Separate Table for Keywords

Create a **Publication_keywords** table:

| publication_id (FK) | keyword            |
|---------------------|--------------------|
| 1                   | Coming-of-Age      |
| 1                   | Legal              |
| 2                   | Fantasy            |
| 2                   | Epic               |
| 2                   | Adventure          |
| 3                   | Romance            |
| 3                   | Social Commentary  |

- This creates a **many-to-many** relationship between publications and keywords.
- Eliminates the multi-valued dependency.
- Achieves **4NF**.


### Fifth Normal Form (5NF)

5NF deals with **join dependencies** and ensures:

> No information can be reconstructed by joining tables that could not be derived from the original tables.



####  What is a Join Dependency?

- Sometimes, even if tables are in 4NF, joining multiple tables is required to reconstruct data correctly.
- 5NF eliminates these **join dependencies** to avoid redundancy and anomalies when reconstructing data.


#### Example Scenario: University Courses and Enrollments

#### Courses Table

| course_id (PK) | course_name               | department       |
|----------------|---------------------------|------------------|
| 101            | Introduction to Programming | Computer Science |
| 202            | Data Structures and Algorithms | Computer Science |
| 301            | Web Development I          | Computer Science |
| 401            | Artificial Intelligence    | Computer Science |

#### Enrollments Table

| enrollment_id (PK) | student_id (FK) | course_id (FK) | grade |
|--------------------|-----------------|----------------|-------|
| 1                  | 12345           | 101            | A     |
| 2                  | 12345           | 202            | B     |
| 3                  | 56789           | 301            | A-    |
| 4                  | 56789           | 401            | B+    |



#### The Join Dependency Problem

- Suppose the **Courses** table includes a column `prerequisite_course_id` indicating prerequisites.
- To get a student’s enrolled courses **and** their prerequisites, you would need to join **Enrollments** and **Courses** twice.
- This join dependency can cause redundancy and inefficiency.


#### Solution: Separate Course Prerequisites Table

Create a **Course_prerequisite** table:

| course_id (FK) | prerequisite_course_id (FK) |
|----------------|-----------------------------|
| 202            | 101                         |
| 301            | NULL                        |
| 401            | 202                         |

- Removes the join dependency.
- Enables efficient joins between **Enrollments** and **Course_prerequisite** to get enrollment + prerequisite info.
- Achieves **5NF**.


### Notes on 5NF

- 5NF is complex and rare in typical databases.
- It applies mostly in highly normalized, complex schemas.
- Useful for avoiding redundancy that arises only when joining multiple tables.


> **SOURCES**  
> [Datacamp](https://www.datacamp.com/tutorial/normalization-in-sql)  
> [Freecodecamp](https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf-table-examples/)










