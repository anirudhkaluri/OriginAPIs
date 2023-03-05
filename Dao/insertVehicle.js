const Vehicle=require('../models');

function addVehicle(veh_obj){
    return Vehicle.create(veh_obj);
}

module.exports=addVehicle;