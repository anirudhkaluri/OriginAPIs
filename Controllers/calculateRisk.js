const {Vehicle,Housing}= require('../models');


const calculate_auto_risk=(user)=>{
    if(user.income===0 || user.possess_vehicle===false || user.possess_house===false)
        return "ineligible";
    var base_risk=parseInt(user.risk_answers[0])+parseInt(user.risk_answers[1])+parseInt(user.risk_answers[2]);
    if(user.Age<30) base_risk=base_risk-2;
    if(user.Age>30 && user.Age<40) base_risk=base_risk-1;
    if(user.income>200000) base_risk=base_risk-1;
    if(base_risk<=0)    return "economic";
    if(base_risk===1 || base_risk===2) return "regular";
    if(base_risk===3) return "responsible";
    return "ineligible";
}


const calculate_disability_risk=(user)=>{
    if(user.income===0 || user.possess_vehicle===false || user.possess_house===false ||user.Age>60)
        return "ineligible";
    var base_risk=parseInt(user.risk_answers[0])+parseInt(user.risk_answers[1])+parseInt(user.risk_answers[2]);
    if(user.Age<30) base_risk=base_risk-2;
    if(user.Age>30 && user.Age<40) base_risk=base_risk-1;
    if(user.income>200000) base_risk=base_risk-1;
    const ownership_status=get_house_ownership(user); //TO-DO implement getOwnership, export, and import it here
    if(owernship_status==='mortgaged')
        base_risk=base_risk+1;
    if(user.dependents_count>0)
        base_risk=base_risk+1;
    if(user.marital_status==='married')
        base_risk=base_risk-1;
    if(base_risk<=0)    return "economic";
    if(base_risk===1 || base_risk===2) return "regular";
    if(base_risk===3) return "responsible";
    return "ineligible";
    

}


const calculate_home_risk=(user)=>{
    
}


const calculate_life_risk=(user)=>{
    
}


module.exports={
    calculate_auto_risk,
    calculate_disability_risk,
    calculate_home_risk,
    calculate_life_risk
}