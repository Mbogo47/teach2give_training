import os
import subprocess
from dotenv import load_dotenv

ENV_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".env"))
load_dotenv(dotenv_path=ENV_PATH)

DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")

#sql file path
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SQL_FILE = os.path.abspath(os.path.join(SCRIPT_DIR, "..", "sql", "schema.sql"))
# print(SQL_FILE)

# Validate required values
if not all([DB_NAME, DB_USER, DB_PASSWORD]):
    print("❌ Missing one or more required database credentials (DB_NAME, DB_USER, DB_PASSWORD).")
    exit(1)

# Export password for psql to use
os.environ["PGPASSWORD"] = DB_PASSWORD

try:
    print(f"⏳ Running SQL COPY commands from {SQL_FILE}...")
    ret_code = subprocess.call([
        "psql",
        f"-d{DB_NAME}",
        f"-U{DB_USER}",
        f"-h{DB_HOST}",
        f"-p{DB_PORT}",
        "-f",SQL_FILE
    ])
    if ret_code == 0:
        print("✅ Schema loaded successfully into PostgreSQL.")
except subprocess.CalledProcessError as e:
    print("❌ Error running SQL commands:", e)
