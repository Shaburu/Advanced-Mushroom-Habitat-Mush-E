from flask import Flask

app = Flask(__name__)

# NUMBERS API ROUTE

@app.route("/members")

def members():
    return{"members" : ["niggerboy", "TERRY DAVIS", "GLOW IN THE DARK CIA"]}

if __name__ == "__main__":
    app.run(debug=True)