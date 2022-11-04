const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username:{
        type: String,
        lowercase: true,
        require: true,
        unique: true
    },

    password:{
        type: String,
        require: true,
        validate(v) {
            if(!this.validate.isLength(v, { min:4, max:20})) throw new Error('Le mot de passe doit etres entre 4 et 20 caracteres!');
        }
    },

    email:{
        type: String,
        require: true,
        validate(v) {
            if(!this.validate.isEmail(v)) throw new Error('E_mail non valide!');
        }
    }

});

module.exports = mongoose.model('User', UserSchema);