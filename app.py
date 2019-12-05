from sqlalchemy import func
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    make_response)

from datetime import timedelta
from flask import make_response, request, current_app
from functools import update_wrapper


import csv
from flask_cors import (CORS , cross_origin)
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
db_url = "postgresql://postgres:Xjy921513!@localhost:5432/collisionsdata"

app.config['SQLALCHEMY_DATABASE_URI'] = db_url
cors = CORS(app, resources={r"/*": {"origins": "*"}})
db = SQLAlchemy(app)


"""class Bigfoot(db.Model):
    __tablename__ = 'bigfoot'

    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    title = db.Column(db.String)
    classification = db.Column(db.String)
    timestamp = db.Column(db.String)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)

    def __repr__(self):
        return '<BigFoot %r>' % (self.name)
"""

#default port number is 5000
#URL for flask: localhost:5000
#
# Create database classes
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()

    print('here')


@app.route("/")
def home():
    """Render Home Page."""

    return render_template("index.html")


@app.route("/index.html")
def index():
    """Render Home Page."""

    return render_template("index.html")

@app.route("/initmap.html")
def initmap():
    """Render Home Page."""

    return render_template("initmap.html")

@app.route("/bar_animated.html")
def bar_animated():
    """Render Home Page."""

    return render_template("bar_animated.html")

@app.route("/multiline.html")
def multiline():
    """Render Home Page."""

    return render_template("multiline.html")

@app.route("/index_TI.html")
def index_TI():
    """Render Home Page."""

    return render_template("index_TI.html")

@app.route("/index_WM.html")
def index_WM():
    """Render Home Page."""

    return render_template("index_WM.html")

@app.route("/chart.html")
def chart():
    """Render Home Page."""

    return render_template("chart.html")

@app.route("/chart2.html")
def chart2():
    """Render Home Page."""

    return render_template("chart2.html")

@app.route("/chart3.html")
def chart3():
    """Render Home Page."""

    return render_template("chart3.html")

@app.route("/borough_summary")
@cross_origin(origin=r'*')
def borough_summary():
    return app.send_static_file('csv/borough_summary.csv')


@app.route("/line_monthYr_borough")
@cross_origin(origin=r'*')
def line_monthYr_borough():
    return app.send_static_file('csv/line_monthYr_borough.csv')


@app.route("/injuryType_borough")
@cross_origin(origin=r'*')
def injuryType_borough():
    return app.send_static_file('csv/injuryType_borough.csv')


@app.route("/weekday_borough")
@cross_origin(origin=r'*')
def weekday_borough():
    return app.send_static_file('csv/weekday_borough.csv')


@app.route("/month_borough")
@cross_origin(origin=r'*')
def month_borough():
    return app.send_static_file('csv/month_borough.csv')


@app.route("/line_monthYr_borough_new")
@cross_origin(origin=r'*')
def line_monthYr_borough_new():
    return app.send_static_file('csv/line_monthYr_borough_new.csv')


@app.route("/getData")
def getData():
    """Render Home Page."""
    #retreive data from
    #practive get data from postgress
    # sel = [func.strftime("%Y", Bigfoot.timestamp), func.count(Bigfoot.timestamp)]
    # results = db.session.query(*sel)
    # df = pd.read_sql_query(query_statement, db.session.bind)
    # return jsonify(df.to_dict(orient="records"))
    x=1
    z=db.session.query('colissionData')
    #db.ses

    return render_template("initmap.html")

@app.route("/submitdata")
def submitData():
    """Render Home Page."""
    #retreive data from
    #push this retrievaed data to postgress
    #db.blablabalbal
    #use ur db object here( db = your postgress connection, see line 16)

    return render_template("initmap.html")


@app.route("/ping")
def ping():
    """Render Home Page."""
    x=0
    return 'gan',500



# Query the database and return the jsonified results
@app.route("/data")
def data():
    #sel = [func.strftime("%Y", Bigfoot.timestamp), func.count(Bigfoot.timestamp)]
    # results = db.session.query(*sel)
        #group_by(func.strftime("%Y", Bigfoot.timestamp)).all()
    # df = pd.read_sql_query(query_statement, db.session.bind)
    # return jsonify(df.to_dict(orient="records"))
    return "test",200




if __name__ == "__main__":
    app.run(debug=True)


