'use strict'
var Animal = require('../Models/animals');

// agregar

function saveAnimal(req,res){
    var animal = new Animal();
    var params = req.body;
    if(params.name && params.type && params.age && params.scientificname){
        animal.name = params.name;
        animal.type = params.type;
        animal.age = params.age;
        animal.scientificname = params.scientificname;
    animal.save((err,AnimalSave)=>{
        if(err){
            res.status(500).send({ err });
        }else{
            if(!AnimalSave){
                res.status(500).send({message: 'Error al guardar los datos'});
            }else{
                res.status(200).send({Animal: AnimalSave});
            }
        }
    });
}else{
    res.status(404).send({message: 'Debe introducir los campos requeridos'});
  }
}

//Listar

function listAnimal(req, res){
    Animal.find({}, (err,Animal)=>{
      if(err){
        res.status(500).send({message: 'No se ha podido listar los animales'});
      }else{
        res.status(200).send({ Animals: Animal });
      }
    });

  }


module.exports = {
  saveAnimal,
  listAnimal

}

