const {Vehicle}=require('../models');

function addVehicle(vehicle_obj){
     Vehicle.create(vehicle_obj)
    .then(res=>console.log('inserted vehicle into the table'))
    .catch(err=>console.log('error inserting vehicle into the table'));
}

function get_production_year(user){

}

module.exports={addVehicle,get_production_year};