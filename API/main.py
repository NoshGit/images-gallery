from flask import Flask, request
import requests
import os
import dotenv

dotenv.load_dotenv(dotenv_path=".env.local")


UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")


if not UNSPLASH_KEY:
    raise EnvironmentError("UNSPLASH_KEY environment variable not set.")

app = Flask(__name__)

@app.route("/")
def base():
    return "Welcome to Search Image API!"


@app.route("/new-image")
def new_image():
    search = request.args.get("query")
    if search:
        response = requests.get(
            UNSPLASH_URL,
            params={"query": search},
            headers={"Authorization": f"Client-ID {UNSPLASH_KEY}"}
        )
        if response.status_code == 200:
            data = response.json()
            print(data)
            description = data["description"] if data["description"] else data["alt_description"]
            return {
                "id": data["id"],
                "url": data["urls"]["regular"],
                "description": description,
                "author": data["user"]["name"],
                "author_url": data["user"]["links"]["html"],
            }, 200
    else:
        return {"error": "No search query provided."}, 400



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)