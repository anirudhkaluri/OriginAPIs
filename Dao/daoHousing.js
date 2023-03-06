const {Housing}=require('../models');

function addHouse(house_obj){
     Housing.create(house_obj) 
    .then(res=>console.log('saved housing details'))
    .catch(err=>console.log('error saving housing details'+err));
}

module.exports=addHouse;