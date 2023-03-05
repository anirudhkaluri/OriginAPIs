const User=require("./User");
module.exports=(sequelize,DataTypes)=>{
    const Housing=sequelize.define("Housing",{
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:"Users",
                key: "user_id",
            }
        },
        ownership_status:{
            type:DataTypes.STRING,
            validate:{
                isIn:[['owned','mortgaged']]
            }

        }
    });
    return Housing;
}