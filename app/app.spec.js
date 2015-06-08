var expect = require('chai').expect;
var App = require('./app');
var _ = require('lodash');


describe("Something", function(){

    it("should be called hello", function(){
        var app = new App();
        console.log('test');
        expect(app.name).to.equal('hello');
    });

});
