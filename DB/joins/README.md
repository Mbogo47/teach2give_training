# 📊 Database Joins Repo

This project demonstrates various types of SQL joins using a sample PostgreSQL database. It's built for collaborative learning, hands-on practice, and clear demonstration of:

- ✅ Table Aliases
- ✅ Inner Joins
- ✅ Left Joins
- ✅ Full Outer Joins
- ✅ Self Joins

## 🧰 Requirements

- Python 3.10+
- PostgreSQL installed and added to PATH (for windows users)
- `python-dotenv`

Install dependencies:

```bash
python -m venv .venv
source .venv/bin/activate 
# or .venv\Scripts\activate on Windows
pip install -r requirements.txt
```

## ⚙️ Setup
### 1. Create a PostgreSQL Database
Create a new database manually or via psql:
```bash
CREATE DATABASE hospital_db
```

### 2. Configure .env
Create a .env file in the project root:
```
DB_NAME=hospital_db
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
```

### 3. 📥 Load Data
#### Step 1: Create Schema
```bash
pythin data_loader/load_schema.py
```
#### Step 2: Convert JSON → CSV (optional if CSVs are already generated)
```bash
python converter/converter_to_csv
```

#### Step 3: Load CSVs into PostgreSQL
```bash
python data_loader/run_copy_commands.py
```

### 🧪 Sample Tables
- doctors – Basic doctor details

- hospitals – Used in joins

- patients – For left/full joins

- employees – Self join example via manager_id

## 🙌 Contributing
1. Fork the repo

2. Create your branch: git checkout -b feature/your-join-demo

3. Make your changes

4. Submit a pull request

## 👨‍💻 Contributors
- Arman ([Arman On Github](github.com/arman-develops))

 🎉 Happy Coding Champ