const express=require("express");
const app=express();

const apiRoutes=require("./Routes/apiRoutes");

app.use(express.json());
app.use(express.urlencoded());
app.use(apiRoutes);





