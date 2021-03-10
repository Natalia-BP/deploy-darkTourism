"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
@api.route("/hello/<int:id>", methods=["GET"])
def handle_hello(id=None):

    if request.method == "GET":
        if not id:
            response_body = {
                "message": "Hello! I'm a message that came from the backend GET"
            }

            return jsonify(response_body), 200
        
        response_body = {
                "message": f"Hello! I'm a message that came from the backend GET {id}" 
            }

        return jsonify(response_body), 200

    if request.method == "POST":
        response_body = {
            "message": "Hello! I'm a message that came from the backend POST"
        }

        return jsonify(response_body), 200