const {Vehicle}=require('../models');

function addVehicle(vehicle_obj){
    return Vehicle.create(vehicle_obj);
}

module.exports=addVehicle;