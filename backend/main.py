from fastapi import FastAPI, HTTPException, Body,Query
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pymongo.collection import Collection
from bson import ObjectId
import json
from fastapi import Path
from fastapi.responses import FileResponse
from fpdf import FPDF
from num2words import num2words
import qrcode



 
client = MongoClient('mongodb://localhost:27017')
db = client['Username']
collection = db['login']
 
app = FastAPI()

origins = [
    "http://localhost:3000",  # Add the actual URL of your frontend
    # Add other allowed origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 

 
@app.get("/login/")  
async def login(phoneNumber: int, password: str):
    user = collection.find_one({"phoneNumber": phoneNumber})
 
    if user is None or user["password"] != password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
 
    return {"message": "Login successful"}