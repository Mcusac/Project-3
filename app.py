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
def home1():
    return render_template("index.html")

@app.route("/index")
def home2():
    return render_template("index.html")

# @app.route("/api/v1.0")
# def api():
#     return f'please work'

@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"

# 4. Define what to do when a user hits the /about route
@app.route("/api/v1.0/pitching")
def pitching_api():
    session = Session(engine)
    pitching_result = session.query(Pitching.playerID, Pitching.yearID, Pitching.HR, Pitching.SO, Pitching.BB, Pitching.ERA, Pitching.first, Pitching.last).all()
    # looks at at each tuple and turns into a list 
    pitching_result = [list(r) for r in pitching_result]
    session.close()
    return jsonify(pitching_result)

@app.route("/api/v1.0/pitching/<playerID>")
def pitching_api_player(playerID):
    session = Session(engine)
    pitching_result = session.query(Pitching.playerID, Pitching.yearID, Pitching.HR, Pitching.SO, Pitching.BB, Pitching.ERA, Pitching.first, Pitching.last).all()
    # looks at at each tuple and turns into a list 
    pitching_result = [list(r) for r in pitching_result]
    session.close()
    pitching_final = []
    for pitcher in pitching_result:
        if pitcher[0] == playerID:
            pitching_final.append(pitcher)
    return jsonify(pitching_final)

@app.route("/api/v1.0/batting")
def batting_api():
    session = Session(engine)
    # batting_result = session.query(Batting.AVG).all()
    batting_result = session.query(Batting.playerID, Batting.yearID, Batting.AVG, Batting.HR, Batting.single_per, Batting.double_per, Batting.triple_per, Batting.HRper, Batting.SO).all()
    # looks at at each tuple and turns into a list 
    batting_result = [list(r) for r in batting_result]
    session.close()
    return jsonify(batting_result)

@app.route("/api/v1.0/batting/<playerID>")
def batting_api_player(playerID):
    session = Session(engine)
    # batting_result = session.query(Batting.AVG).all()
    batting_result = session.query(Batting.playerID, Batting.yearID, Batting.AVG, Batting.HR, Batting.single_per, Batting.double_per, Batting.triple_per, Batting.HRper, Batting.SO).all()
    # looks at at each tuple and turns into a list 
    batting_result = [list(r) for r in batting_result]
    session.close()
    batting_final = []
    for batter in batting_result:
        if batter[0] == playerID:
            batting_final.append(batter)
    return jsonify(batting_final)

@app.route("/batting")
def batting():
    return render_template("batting.html")

@app.route("/pitching")
def pitching():
    return render_template("pitching.html")
    
if __name__ == "__main__":
    app.run(debug=True)
