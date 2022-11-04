const mongoose = require('mongoose');


//connexion Mongoose
mongoose.connect('mongodb+srv://mohamedakrout:20540601mot@cluster0.joo2wsy.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

