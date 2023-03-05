const User=require("./User");
module.exports=(sequelize,DataTypes)=>{
    const Vehicle=sequelize.define("Vehicle",{
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:"Users",
                key:"user_id"
            }
        },
        vehicle_production_date:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    });
    return Vehicle;
}