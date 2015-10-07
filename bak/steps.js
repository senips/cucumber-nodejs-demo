var assert = require('chai').assert;

module.exports = function() {

  var result = null;

  this.Given(/^open calculator application and reset to new operation$/, function (callback) {

    //pretend that we are putting neccessary code in order to launch the calculator app.
    callback(null);
  });

  this.When(/^I do add operation with the values "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
    result = parseInt(arg1)+parseInt(arg2);
    callback(null);
  });

  this.Then(/^I expect the result should be "([^"]*)"$/, function (arg1, callback) {
    assert.equal(parseInt(arg1), result);
    callback(null);
  });


  this.When(/^I do subtract operation with the values (.*) and (.*)$/, function (a, b, callback) {
    result = parseInt(a)-parseInt(b);
    callback(null);
  });

  this.Then(/^so the result should be (.*)$/, function (c, callback) {
    assert.equal(parseInt(c), result);
    callback(null);
  });

};
