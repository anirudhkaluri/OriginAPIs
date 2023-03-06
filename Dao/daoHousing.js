const {Housing}=require('../models');

function addHouse(house_obj){
     Housing.create(house_obj) 
    .then(res=>console.log('saved housing details'))
    .catch(err=>console.log('error saving housing details'+err));
}

function get_house_ownership(user){

}

module.exports={addHouse,get_house_ownership};