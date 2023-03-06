const {Vehicle}=require('../models');

function addVehicle(vehicle_obj){
     Vehicle.create(vehicle_obj)
    .then(res=>console.log('inserted vehicle into the table'))
    .catch(err=>console.log('error inserting vehicle into the table'));
     //TO-DO: DELETE THE USER SINCE WE COULDNT STORE VEHICLE DATA AFTER STORING USER DATA IF THERE IS AN ERROR
}

function get_production_year(user){
    Vehicle.findByPk(user.user_id)
    .then((res)=>{
        return res.vehicle_production_date;
    })
    .catch(err=>console.log(`error fetching vehicle production date in daoVehicle ${err}`));
}

module.exports={addVehicle,get_production_year};