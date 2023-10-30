//import the function circle from index.js
const circle = require('./serwer.js').circle; 
//import your assertion library from chai
const expect = require('chai').expect;
//write your test here
 describe('Testing Diameter, Area of circle',function() {
     it('Test1. circle Diameter', function(done) {
         let radius = new circle(5);
         expect(radius.getDiameter()).to.equal(10);
         done();
     });
     it('Test2. Circle area', function(done) {
         
         let radius = new circle(25);
         expect(radius.getArea()).to.equal(79);
         done();
     });
 });