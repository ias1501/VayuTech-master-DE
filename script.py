import serial
import requests
from datetime import datetime

ser = serial.Serial('COM3', 9600) 

# Supabase endpoint and API key
supabase_url = "https://veqqfdfxcrzflhdzjpjj.supabase.co"
supabase_api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcXFmZGZ4Y3J6ZmxoZHpqcGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NTg5MzYsImV4cCI6MjAxNTAzNDkzNn0.CkP8BTUxEA-bR5USQqe8rjFPhLZFP6oHTMYgbSIkQ9s"
def insert_data_into_air_quality_data(date, time, data):
    headers = {
        'Content-Type': 'application/json',
        'apikey': supabase_api_key
    }
    payload = {
        'date': date,
        'time': time,
        'readings': data
    }
    response = requests.post(
        f"{supabase_url}/rest/v1/air_quality_data",
        headers=headers,
        json=payload
    )
    if response.status_code == 200:
        print("Data inserted successfully!")
    else:
        print(f"Error inserting data. Status code: {response.status_code}")
        print("Response content:", response.content)

# Continuously read data from Arduino Uno and send it to Supabase
while True:
    if ser.in_waiting > 0:
        data = ser.readline().decode('utf-8').strip()
        now = datetime.now()
        date = now.strftime("%Y-%m-%d")
        time = now.strftime("%H:%M:%S")
        print("Received:", data)
        insert_data_into_air_quality_data(date, time, data)