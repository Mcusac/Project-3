# 1. import Flask
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# import Plotly from 

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Baseball.sqlite")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# # Save reference to the tables
Pitching = Base.classes.Pitching
Batting = Base.classes.Batting

# Create an app, being sure to pass __name__
app = Flask(__name__)

# Define what to do when a user hits the index route
# The / and /index routes will both render index.html, the home page.
@app.route("/")
def home1():
    return render_template("index.html")

@app.route("/index")
def home2():
    return render_template("index.html")

@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"

# Define what to do when a user hits the /about route
@app.route("/api/v1.0/pitching")
def pitching_api():
    session = Session(engine)
    pitching_result = session.query(Pitching.playerID, Pitching.yearID, Pitching.HR, Pitching.SO, Pitching.BB, Pitching.ERA, Pitching.first, Pitching.last).all()
    # looks at at each tuple and turns into a list 
    pitching_result = [list(p) for p in pitching_result]
    session.close()
    return jsonify(pitching_result)

@app.route("/api/v1.0/batting")
def batting_api():
    session = Session(engine)
    # batting_result = session.query(Batting.AVG).all()
    batting_result = session.query(Batting.playerID, Batting.yearID, Batting.AVG, Batting.HR, Batting.single_per, Batting.double_per, Batting.triple_per, Batting.HRper, Batting.SO).all()
    # looks at at each tuple and turns into a list 
    batting_result = [list(b) for b in batting_result]
    session.close()
    return jsonify(batting_result)

@app.route("/batting")
def batting():
    return render_template("batting.html")

@app.route("/batting_data")
def form_batting():
    return render_template("batting_data.html")


@app.route("/pitching")
def pitching():
    return render_template("pitching.html")


@app.route("/pitching_data")
def form_pitching():
    return render_template("pitching_data.html")

#--------------------------------------------------------------------------------------------------------

@app.route("/pitching/<playerID>", methods=["GET", "POST"])
def pitching_api_year_player(playerID):

    session = Session(engine)
    
    print(playerID)    
    pitching_result = session.query(Pitching.playerID, Pitching.yearID, Pitching.HR, Pitching.SO, Pitching.BB, Pitching.ERA, Pitching.first, Pitching.last).filter(Pitching.playerID == playerID).all()
    print(pitching_result)
    pitching_result = [list(p) for p in pitching_result]
    session.close()

    return jsonify(pitching_result)

@app.route("/batting/<yearID>/<playerID>", methods=["GET", "POST"])
def batting_api_year_player(yearID, playerID):

    session = Session(engine)

    print(yearID, playerID)
    batting_result = session.query(Batting.playerID, Batting.yearID, Batting.AVG, Batting.HR, Batting.HRper, Batting.SO, Batting.first, Batting.last).filter(Batting.playerID == playerID).all()    
    year_bat = session.query(Batting.single_per, Batting.double_per, Batting.triple_per, Batting.HRper).filter(Batting.playerID == playerID).filter(Batting.yearID == yearID).all()
    print(batting_result)
    batting_result = [list(b) for b in batting_result]
    year_bat = [list(b) for b in year_bat]
    session.close()

    results = {
        'Batting': batting_result,
        'Year': year_bat
    }
    return jsonify(results)

# work for future
# @app.route('/batting_data/')
# def bat_data():
#     session = Session(engine)
    
#     batting_result = session.query(Batting.playerID, Batting.yearID, Batting.AVG, Batting.HR, Batting.single_per, Batting.double_per, Batting.triple_per, Batting.HRper, Batting.SO).all()
#     batting_result = [list(b) for b in batting_result]
#     return jsonify(batting_result) 

# @app.route('/pitching_data/')
# def pitch_data():
#     session = Session(engine)
    
#     pitching_result = session.query(Pitching.playerID, Pitching.yearID, Pitching.HR, Pitching.SO, Pitching.BB, Pitching.ERA, Pitching.first, Pitching.last).all()
#     pitching_result = [list(b) for b in pitching_result]

#     return jsonify(pitching_result) 
#--------------------------------------------------------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)
