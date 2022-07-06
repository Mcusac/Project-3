# 1. import Flask
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Baseball.sqlite")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)



# # Save reference to the table
Pitching = Base.classes.Pitching
Batting = Base.classes.Batting

# # 2. Create an app, being sure to pass __name__
app = Flask(__name__)

# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return render_template("index.html")


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"

# 4. Define what to do when a user hits the /about route
@app.route("/api/v1.0")
def api():
    session = Session(engine)
    result = session.query(Pitching.playerID, Pitching.yearID).all()
    # looks at at each tuple and turns into a list 
    result = [list(r) for r in result]
    session.close()
    print(result)
    return jsonify(result)
    
if __name__ == "__main__":
    app.run(debug=True)
