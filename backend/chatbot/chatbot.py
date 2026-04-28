from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ You must import this
import requests

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])  # ✅ CORS is used for frontend-backend communication

OLLAMA_API_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "llama3"

@app.route("/api/chat/ask", methods=["POST"])
def chat_with_llama():
    data = request.get_json()
    prompt = data.get("prompt", "")

    if not prompt.strip():
        return jsonify({"response": "Please enter a message."})

    # Send prompt to Ollama
    try:
        response = requests.post(OLLAMA_API_URL, json={
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": False
        })
        if response.status_code == 200:
            result = response.json()
            return jsonify({"response": result.get("response", "No response from model.")})
        else:
            return jsonify({"response": "Failed to get response from LLaMA model."}), 500
    except Exception as e:
        return jsonify({"response": f"Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
