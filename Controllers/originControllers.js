const {User}=require('../models');
const {Vehicle}=require('../models');
const {Housing}=require('../models');


const create_user=(req,res)=>{
    const user=req.body;
    console.log("the user is:"+user);
    console.log("the age is:"+user.age);
    var vehicle=false;
    var housing=false;
    var risk_answers_array=user.risk_questions;
    var risk_answers_string=risk_answers_array[0].toString()+risk_answers_array[1].toString()+risk_answers_array[2].toString();

    if(user.hasOwnProperty('vehicle'))
        vehicle=true;
    if(user.hasOwnProperty('house'))
        housing=true;
    
     User.create({
        Age:user.age,
        dependents_count:user.dependents,
        income:user.income,
        marital_status:user.marital_status,
        possess_vehicle:vehicle,
        possess_house:housing,
        risk_answers:risk_answers_string

    })
    .then((saved_user)=>{
        console.log("---------------------------User saved successfully---------------------");
        console.log(`saved_users age is ${saved_user.Age}`)
        if(housing){
            Housing.create({
                user_id:saved_user.user_id,
                ownership_status:user.house.ownership_status
            })
            .then((data)=>{
                console.log(`we saved the housing details of the user with user_id=${saved_user.user_id} `);
              
            })
            .catch((err)=>{
                console.log(`failed to save housing details of user with user_id= ${saved_user.user_id}`);
                console.log(err);
                  //TO-DO DELETE THE ENTRY IN THE USER TABLE TOO
            });
        }
        if(vehicle){ //saved_usr shouldnt be null if we deleted in the housing portion
            Vehicle.create({
                user_id:saved_user.user_id,
                vehicle_production_date:user.vehicle.year
            })
            .then((data)=>{
                console.log(`we saved the vehicle details of user with user id ${saved_user.user_id}`);
            })
            .catch((err)=>{
                console.log(`failed to save the vehicle details of user with user id ${saved_user.user_id}`);
                console.log(err);
                //TO-DO DELETE THE ENTRY IN USER TABLE AND HOUSING TABLE
            });
        }


    })
    .catch((err)=>{
        console.log("Error Saving User");
        console.log(err);
    });

    res.send(`{"response":"lol"}`);
}

const calculate_risk=(req,res)=>{

}

module.exports={
    create_user,
    calculate_risk
}