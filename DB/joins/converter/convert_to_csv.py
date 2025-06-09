import os
import pandas as pd

#directory containing JSON files
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, "..", "data"))
OUTPUT_DIR = os.path.join(INPUT_DIR, "csv")

# Ensure the output CSV directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

#Loop through all JSON files in the directory
for filename in os.listdir(INPUT_DIR):

    if filename.endswith(".json"):
        json_path = os.path.join(INPUT_DIR, filename)
        csv_filename = filename.replace(".json", ".csv")
        csv_path = os.path.join(OUTPUT_DIR, csv_filename)

        try:
            #read and convert
            df = pd.read_json(json_path)
            df.to_csv(csv_path, index=False)
            print(f"[✓] Converted '{filename}' → 'csv/{csv_filename}'")
        except Exception as e:
            print(f"[✗] Failed to convert '{filename}': {e}")
