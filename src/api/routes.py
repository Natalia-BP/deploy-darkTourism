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



#@api.route('/hello', methods=['POST', 'GET'])

# GET USER
@api.route('/user', methods=['GET'])
def get_all_user():
    all_user = User.query.all()
    all_user = list(map(lambda user: user.serialize(),all_user))
    return jsonify(all_user)


# Register POST
@api.route('/register', methods= ['POST'])
def register():
    if request.method == 'POST':
        email = request.json.get("email", None) # Por default es None, o sea si no trae nada
        password = request.json.get("password", None)
        #is_active = request.json.get("is_active", True) # Es true porque se supone que si se crea un usuario este va a estar activo
        #nick_name = request.json.get("nick_name")

        if not email:
            return jsonify({"Mensaje":"email es requerido"}), 400
        if not password:
            return jsonify({"Mensaje":"password es requerido"}), 400
        user = User.query.filter_by(email=email).first()
        if user: 
            return jsonify({"Mensaje":"Usuario ya registrado"}), 400

        user = User()
        user.email = email
        hashed_password = generate_password_hash(password)
        user.password = hashed_password
        #user.is_active = is_active
        #user.nick_name = nick_name

        db.session.add(user)
        db.session.commit()

        return jsonify({"Mensaje": "Gracias por registrarse"}), 200
        

#Login
#@api.route('/hello', methods=['POST', 'GET'])

