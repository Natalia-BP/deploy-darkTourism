"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Place, Scores
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
import datetime # se importo para que funcione el login (datetime(token))
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

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


# Registro
@api.route('/register', methods= ['POST'])
def register():
    if request.method == 'POST':
        email = request.json.get("email", None) # Por default es None, o sea si no trae nada
        password = request.json.get("password", None)
        is_active = request.json.get("is_active", True) # Es True porque se supone que si se crea un usuario este va a estar activo
        nickname = request.json.get("nick_name")

        if not email:
            return jsonify({"Msg":"email es requerido"}), 400
        if not password:
            return jsonify({"Msg":"password es requerido"}), 400
        user = User.query.filter_by(email=email).first()
        if user: 
            return jsonify({"Msg":"Usuario ya registrado"}), 400

        user = User()
        user.email = email
        hashed_password = generate_password_hash(password)
        user.password = hashed_password
        user.is_active = is_active
        user.nickname = nickname

        db.session.add(user)
        db.session.commit()

        return jsonify({"Msg": "Gracias por registrarse"}), 200
        
# Login
@api.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        if not email:
            return jsonify({"Msg": "El email es requerido"}), 400
        if not password:
            return jsonify({"Msg": "La contraseña es requerida"}), 400

        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({"Msg": "El email es incorrecto"}), 401

        if not check_password_hash(user.password, password):
            return jsonify({"Mensaje": "La constraseña es incorrecta"}), 401

        # crear el token
        expiracion = datetime.timedelta(days=3)
        access_token = create_access_token(identity=user.email, expires_delta=expiracion)

        data = {
            "user": user.serialize(),
            "token": access_token,
            "expires": expiracion.total_seconds()*1000
        }

        return jsonify(data), 200

# User
#GET
@api.route('/user', methods=['GET'])
def get_all_user():
    all_user = User.query.all()
    all_user = list(map(lambda user: user.serialize(),all_user))
    return jsonify(all_user)

# GET ID
@api.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.filter_by(id=id).first()
    if not user:
        return jsonify({"msg":"user no encontrado"})
    user = user.serialize()
    return jsonify(user)

#POST
@api.route('/user', methods=['POST'])
def create_user():
    email = request.json.get('email')
    password = request.json.get('password')
    is_active = request.json.get('is_active')
    nickname = request.json.get('nickname')
  
    if not email:
        return jsonify({"msg": "El email no puede estar vacio"})

    new_user = User()
    new_user.email = email
    new_user.password = password
    new_user.is_active = is_active
    new_user.nickname = nickname

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "Usuario creado exitosamente"}), 200

# Place
# GET 
@api.route('/place', methods=['GET'])
def get_all_place():
    all_place = Place.query.all()
    all_place = list(map(lambda place: place.serialize(),all_place))
    return jsonify(all_place)

# GET ID 
@api.route('/place/<int:id>', methods=['GET'])
def get_place(id):
    place = Place.query.filter_by(id=id).first()
    if not place:
        return jsonify({"msg":"place no encontrado"})
    place = place.serialize()
    #scores.query.filter_by_place_id//se podria insertar directamente!!
    return jsonify(place)

# POST 
@api.route('/place', methods=['POST'])
def create_place():
    #id = request.json.get('id')
    img = request.json.get('img')
    name_place = request.json.get('name_place')
    description = request.json.get('description')
    location = request.json.get('location')

    if not name_place:
        return jsonify({"msg": "El nombre no puede estar vacio"}), 400

    new_place = Place()
    new_place.img = img
    new_place.name_place = name_place
    new_place.description = description
    new_place.location = location

    db.session.add(new_place)
    db.session.commit()

    return jsonify({"msg": "Place creado exitosamente"}), 200

# UPDATE//PUT  
@api.route('/place/<int:place_id>', methods=['PUT'])
def update_place(place_id):
    place = request.json
    if not place:
        return jsonify({"Msj":"Debe enviar un place valido!"}), 400
    place.update(place)
    db.session.commit()
    return jsonify(place)

#DELETE
@api.route('/place/<int:place_id>', methods=['DELETE'])
def delete_place(place_id):
    place = Place.query.filter_by(id=place_id).delete()
    if not place:
        return jsonify({"Msj":"Place no existe!!"})
    db.session.commit()
    return jsonify(place)

#Endpoint extras

# GET IMG(FOTOS de Judy) InfoPlace 
@api.route('/place/<string:name_place>', methods=['GET'])
def get_name_place(name_place):
    all_name_place = Place.query.filter_by(name_place=name_place).all()
    if not name_place:
        return jsonify({"msg":"img no encontrada"})
    all_imageplace_serialize = list(map(lambda img: img.serializeimg(), all_name_place))
    return jsonify(all_imageplace_serialize)

# POST score (Naty)  
@api.route('/score', methods=['POST'])
def create_score():
    place_id= request.json.get('place_id')
    score = request.json.get('score')
    review_comments= request.json.get('review_comments')

    if not review_comments:
        return jsonify({"msg": "El comentario no puede estar vacio"}), 400

    new_score = Scores()
    new_score.place_id = place_id
    new_score.score = score
    new_score.review_comments = review_comments

    db.session.add(new_score)
    db.session.commit()

    return jsonify({"msg": "Score and Comment creado exitosamente"}), 200

#GET promedio de estrellas  :D  :D   ;D
@api.route('/promedio', methods=['GET'])
def get_promedio():
    place_id = request.get_json()
    place_id = place_id['place_id']
    print("PLACE ID", place_id)

    scores = Scores.query.filter_by(place_id=place_id).all()
    print(scores)
    scores_serializados = list(map(lambda place_id: place_id.serialize(),scores)) 
    print(scores_serializados)

    promedio = 0
    for score in scores_serializados:
        promedio += score['score']
    promedio = promedio / len(scores_serializados)
    print(promedio)
    # modelar la info para mandar
    data = {
        'promedio': promedio,
        'comentarios':list(map(lambda score: score['review_comments'], scores_serializados))
    }
    
    return jsonify(data)
 


    






