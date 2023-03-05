const Housing=require('../models');

function addHouse(house){
    return Housing.create(house);
}

module.exports=addHouse;