# TRANSACTION
- A **transaction** is any operation that is treated as a single unit of work, which either completes fully or does not complete at all, and leaves the storage system in a consistent state. 

- The classic example of a transaction is what occurs when you withdraw money from your bank account. Either the money has left your bank account, or it has not — there cannot be an in-between state.

# ACID PROPERTIES
![Acid properties](acid.png)

- **ACID** is an acronym that refers to the set of 4 key properties that define a transaction:
    - Atomicity
    - Consistency
    - Isolation
    - Durability

##  Atomicity:
**Definition:**

- Atomicity ensures that a transaction is treated as an indivisible unit. It means either all operations within a transaction are completed successfully, or none of them are. If any part of the transaction fails, the entire transaction is rolled back to its original state, preventing partial updates and ensuring data integrity.

**Example:**
> In a bank transfer, if one account is debited but the other isn't credited due to a failure, the transaction is rolled back, leaving both accounts with the original balance. 

## Consistency 
**Definition:**
- Ensures that transactions only make changes to tables in predefined, predictable ways. Transactional consistency ensures that corruption or errors in your data do not create unintended consequences for the integrity of your table.
- It ensures that the transaction adheres to all database constraints (e.g., data types, primary keys, foreign keys) and business rules, preventing data corruption.

**Example:**
> If a transaction attempts to update an account balance to a negative value, which violates a database constraint, the transaction would be rolled back to prevent inconsistencies. 


## Isolation 
**Definition:**

- Isolation ensures ensures that the concurrent transactions don't interfere with or affect one another. Each request can occur as though they were occurring one by one, even though they're actually occurring simultaneously.

**Example:**

>When two users attempt to book the same train ticket simultaneously, isolation ensures that only one of them gets the seat, preventing multiple bookings and ensuring data consistency. 

## Durability

- Durability ensures that changes to your data made by successfully executed transactions will be saved, even in the event of system failure.

- The changes made by a committed transaction are persistent and can be recovered even after a system failure.

**Example:**

>If a transaction is committed before a power outage, the changes made by that transaction are preserved and can be retrieved after the system is restored. 

> **SOURCES**  
> [Databricks](https://www.databricks.com/glossary/acid-transactions#:~:text=ACID%20is%20an%20acronym%20that,operations%20are%20called%20transactional%20systems.)  
