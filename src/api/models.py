from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user" 
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(30))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    favorite_place= db.relationship("Favorite_Place", backref="user", cascade="all, delete")
    scores = db.relationship("Scores", backref="user")

    def __repr__(self):
        return '<User %r, %r, %r>' % (self.id, self.nickname, self.email)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nickname" : self.nickname,
            "is_active" : self.is_active,
            "favorite_place" : list(map(lambda fav_place: fav_place.serialize(),self.favorite_place))
        }
    
    def serialize2(self):
        return list(map(lambda fav_place: fav_place.serialize(),self.favorite_place))

class Place(db.Model):
    __tablename__ = "place"
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.String(800))
    name_place = db.Column(db.String(30)) 
    description = db.Column(db.Text)
    location = db.Column(db.String(400))
    liked_by_users = db.relationship("Favorite_Place", backref="place", cascade="all, delete")
    scores = db.relationship("Scores")

    def __repr__(self):
        return '<Place %r, %r, %r>' % (self.id, self.name_place, self.location)

    def serialize(self):
        return {
            "id": self.id,
            "img": self.img,
            "name_place": self.name_place,
            "description": self.description,
            "location": self.location,
            "scores": list(map(lambda score:score.serialize(),self.scores))
        }
    def serializeimg(self):
        return {
            "id": self.id,
            "name_place": self.name_place,
            "img": self.img,
            "location": self.location
        }
   
class Favorite_Place(db.Model):
    __tablename__ = "favorite_place"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'))
    
    def __repr__(self): 
        return '<Favorite-Place %r, %r>' % (self.id, self.place_id)

    def serialize(self):
        return {       
            "id": self.id,
            "user_id": self.user_id,
            "place_id" : self.place_id,
            "place_name" : self.place.name_place
        } 

class Scores(db.Model):
    __tablename__ = "scores"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'))
    score = db.Column(db.Integer)
    review_comments = db.Column(db.Text)

    def __repr__(self):
        return '<Scores %r>' % self.id 

    def serialize(self):
        return {       
            "id": self.id,
            "user_id": self.user_id,
            "place_id" : self.place_id,
            "score": self.score,
            "user": self.user.nickname,
            "review_comments": self.review_comments
        } 
    
    def serialize2(self):
        return self.score
       