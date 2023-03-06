const {User}=require("../models");

function addUser(user){
    return User.create(user);
}

module.exports=addUser;