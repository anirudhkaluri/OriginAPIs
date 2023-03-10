const express=require('express');
const router=express.Router();
const originController=require('../Controllers/originControllers');

router.post('/createUser',originController.create_user);

router.get('/calculateRisk/:uid',originController.calculate_risk);

module.exports=router;