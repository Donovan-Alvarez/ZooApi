'use strict'
var Managers = require('../Models/managers');

// agregar

function ManagerSave(req, res){
  var manager = new Managers();
  var params = req.body;

  if (params.name){
      manager.name = params.name;
      manager.charge = params.charge;
      manager.phone = params.phone;
      manager.animal = params.animal;

      manager.save((err, managerStored) => {
        if(err){
          res.status(500).send({err});
        }else{
          if(!managerStored){
            res.status(404).send({message: 'no se pudo registrar'});
          }else{
            res.status(200).send({ Manager: managerStored });
          }
        }
      });
  }else{
    res.status(200).send({message: 'intoduce los datos correctamente'});
    }
  }

//   Listar
function listManager(req, res){
    Managers.find({}, (err,Manager)=>{
      if(err){
        res.status(500).send({message: 'no se ha podido listar'});
      }else{
        res.status(200).send({ Managers: Manager });
      }
    });

  }

  //buscar
  function buscarManager (req,res){
    var busqueda = req.params.busqueda;

    Managers.find({$or:[{name: busqueda},{charge: busqueda}]}, (err, Manager)=>{
      if(err){
        res.status(500).send({message: 'no se ha podido listar'});
      }else{
        res.status(200).send({ Managers: Manager });
      }
    });
  }





module.exports = {
    ManagerSave,
    listManager,
    buscarManager


}
