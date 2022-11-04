const express= require('express');
const app=express();

const Annonce = require('./src/models/annonce');
const connect = require ('./src/services/mongoose');

app.use(express.json());













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
        const saveData = await data.save()
          res.send(saveData);
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