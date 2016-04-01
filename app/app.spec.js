const App = require('./app');

describe("Something", () => {

    it("should be called hello", () => {
        const app = new App();
        expect(app.name).to.equal('hello');
    });

});
