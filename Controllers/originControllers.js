const {User,Vehicle,Housing}=require('../models');
const addUser=require('../Dao/insertUser');
const addHouse=require('../Dao/insertHousing');
const addVehicle=require('../Dao/insertVehicle');





const create_user=(req,res)=>{

    const user=req.body;
    var vehicle=false;
    var housing=false;
    var risk_answers_array=user.risk_questions;
    var risk_answers_string=risk_answers_array[0].toString()+risk_answers_array[1].toString()+risk_answers_array[2].toString();

    if(user.hasOwnProperty('vehicle'))
        vehicle=true;
    if(user.hasOwnProperty('house'))
        housing=true;
    
    const user_obj={
        Age:user.age,
        dependents_count:user.dependents,
        income:user.income,
        marital_status:user.marital_status,
        possess_vehicle:vehicle,
        possess_house:housing,
        risk_answers:risk_answers_string

    };
    
    addUser(user_obj)
    .then((saved_user)=>{
        if(housing){
            const house_obj={user_id:saved_user.user_id,ownership_status:user.house.ownership_status};
            addHouse(house_obj);
        }
        if(vehicle){ 
            const vehicle_obj={user_id:saved_user.user_id,vehicle_production_date:user.vehicle.year};
            addVehicle(vehicle_obj);
        }
    })
    .catch(err=>console.log('error saving user'+err));

    res.send(user);
}


const calculate_risk=(req,res)=>{
    const user_id=req.params.uid;
    var user=getUser(user_id);

}

module.exports={
    create_user,
    calculate_risk
}