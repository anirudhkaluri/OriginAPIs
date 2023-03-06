const db=require('./models');
const express=require("express");
const app=express();

const apiRoutes=require("./Routes/apiRoutes");

app.use(express.json());
app.use(express.urlencoded());


app.use(apiRoutes);


db.sequelize.sync()
.then((res)=>{
    app.listen(3000,()=>{
        console.log("listening to port=3000");
    });
})
.catch((err)=>{
    console.log("error creating the database schema in the file");
    console.log(err);
});

module.exports=app;




