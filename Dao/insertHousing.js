const {Housing}=require('../models');

function addHouse(house_obj){
    return Housing.create(house_obj);
}

module.exports=addHouse;