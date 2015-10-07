# Cucumber tests for NodeJS

Getting Started:



1.  add new scenario or new feature under features directory

2.  create a new Javascript file under the same location / features directory (filename can be any)

      ** use the below template to create a new Javascript file for your test **

      var assert = require('chai').assert;

      module.exports = function() {


        //generated steps code goes here


      };


3. generate steps code by running below at the command prompt
    for windows:
      C:>cucumber-js  
    for Linux/Mac:
      $cucumber.js


    once generated, just copy paste the code into above Javascript file

---------
example scenario:
---------
Feature:  calculator application supports arithmetic operations

Scenario:  adding two decimal numbers
  Given open calculator application and reset to new operation
  When I do add operation with the values 10 and 20
  Then I expect the result should be 30
