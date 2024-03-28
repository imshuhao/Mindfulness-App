import os
from flask import Flask
import pymongo
import json

db_password = os.environ['DB_PASSWORD']
client = pymongo.MongoClient(
    f"mongodb+srv://mindfulness:{db_password}@mindfulness-app.edmj9uo.mongodb.net/?retryWrites=true&w=majority"
)
db = client.mindfulness
# collection = db.articles

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello from Flask!'


@app.route('/articles/')
def articles():
    all_articles = []
    for entry in db.articles.find():
        all_articles.append(entry)
    return json.dumps(all_articles, default=str)


app.run(host='0.0.0.0', port=81)
