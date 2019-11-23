from sqlalchemy import func
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# db_url = "postgresql://admin:admin@localhost:5432/collisionsdata"

# app.config['SQLALCHEMY_DATABASE_URI'] = db_url

# db = SQLAlchemy(app)


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

# Create database classes
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    # db.create_all()
    print('here')


@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")



@app.route("/ping")
def ping():
    """Render Home Page."""
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


