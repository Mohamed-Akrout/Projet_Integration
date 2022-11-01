const express= require('express');
const app=express();
const mongoose = require('mongoose');
const Annonce = require('./models/annonce');
app.use(express.json());

//connexion Mongoose
mongoose.connect('mongodb+srv://mohamedakrout:20540601mot@cluster0.joo2wsy.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//SAVE table in MongoDB
    app.post('/annonce1', async (req, res) =>{
        const data = new Annonce({
          title: req.body.title,
          num_poste_vac: req.body.num_poste_vac,
          Type_e: req.body.Type_e,
          niveau: req.body.niveau,
          discription: req.body.discription,
          motcles: req.body.motcles,
        });
        const val=await data.save()
          res.send("posted");
      });


//GET table
app.get('/annonce', (req, res) => {
   data.find()
     .then(annonce => res.status(200).json(annonce))
     .catch(error => res.status(400).json({ error }));
 });

 //recovery table

 app.get('/annonce/:id', (req, res, next) => {
   Annonce.findOne({ _id: req.params.id })
     .then(thing => res.status(200).json(annonce))
     .catch(error => res.status(404).json({ error }));
 });

 module.exports = app;