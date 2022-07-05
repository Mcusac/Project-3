from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:{port}/baseball_db")


# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    baseball = mongo.db.collection.find_one()

    # Return template and data
    return render_template("index.html", baseball=baseball)

if __name__ == "__main__":
    app.run(debug=True)
