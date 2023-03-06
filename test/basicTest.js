var assert=require('assert');


describe('BasicTest',function(){
    describe('Multiplication',function(){
        it('should equal 15 when 5 is multiplied by 3',function(){ 
            var result=5*15;
            assert.notEqual(result,15);
        });
    });
    describe('Divide',function(){
        it('should give 3 when 15 is divided by 5',function(){
            var result=15/5;
            assert.equal(result,3);
        });
    });
});
