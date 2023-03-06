const chai=require('chai');
const chaiHttp=require('chai-http');
const app=require('../app');
const http=require('http');
const server=http.createServer(app);

const expect=chai.expect;
chai.use(chaiHttp);

describe('TEST API ROUTES',()=>{
    describe('GET REQUESTS TESTS',()=>{
        it('SHOULD RETURN CORRECT INSURANCE PLANS WHEN SENT',(done)=>{
            chai.request(app)
            .get('/calculateRisk/2',)
            .end((err,res)=>{ //request is sent when end method is invoked, on response the callback function is invoked
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body.home).to.equal('ineligible');
                done();
            });
        });
    });
   
});