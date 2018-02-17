const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const mongoose = require('./dbConnection');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: {type: String, unique: true}
});

const UserModel = mongoose.model('UserModel', UserSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/saveUser', function(req, res){
    
  const userModelJson = req.body;
  const userModel = new UserModel(userModelJson);

  userModel.save(function(error) {
    if(error) {
      console.log(error);
      return res.json({msg: "error"});
    }

    console.log("user created: " + userModel.username);
    res.json(userModel);
 
  });
  

});

app.get('/getUser', function(req, res){

    UserModel.find({}, function (err, docs) {
        res.json(docs);
    });

});

app.listen(8811);