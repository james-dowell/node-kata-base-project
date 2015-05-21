var expect = require('chai').expect;
var App = require('../app');
var Test = require('../test');
var _ = require('lodash');


describe("Something", function(){

    it("should be called hello", function(){
        var app = new App();
        expect(app.name).to.equal('hello');
    });

});
