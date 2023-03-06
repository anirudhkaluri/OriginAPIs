const {User}=require("../models");

function addUser(user){
    return User.create(user);
}

function getUser(user_id){
   User.findByPk(user_id)
   .then(res=>{return res;})
   .catch(err=>console.log(`Error fetching user in daoUser ${err}`));
}

module.exports={addUser,getUser};