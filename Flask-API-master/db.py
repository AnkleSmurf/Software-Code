from flask import Flask
from flask_pymongo import pymongo
from pymongo import MongoClient
from app import app
CONNECTION_STRING = "mongodb+srv://ankles123:ankles123@biomedicalchallenge.tzbwe.mongodb.net/testm?ssl=true&ssl_cert_reqs=CERT_NONE"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('test')
user_collection = pymongo.collection.Collection(db, 'users')