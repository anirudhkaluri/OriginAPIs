const {Housing}=require('../models');

function addHouse(house_obj){
     Housing.create(house_obj) 
    .then(res=>console.log('saved housing details'))
    .catch(err=>console.log('error saving housing details'+err));
     //TO-DO: DELETE THE USER SINCE WE COULDNT STORE HOUSING DATA AFTER STORING USER DATA IF THERE IS AN ERROR
}

function get_house_ownership(user){
    Housing.findByPk(user.user_id)
    .then((res)=>{
        return res.ownership_status;
    })
    .catch(err=>console.log(`error fetching house ownership status ${err}`));
}

module.exports={addHouse,get_house_ownership};