const {User}=require("../models");

function addUser(user){
    return User.create(user);
}

async function getUser(user_id){
   console.log(`in getUser for user_iid=${user_id}`);
   const user=await User.findByPk(user_id);
   return user;
}

module.exports={addUser,getUser};