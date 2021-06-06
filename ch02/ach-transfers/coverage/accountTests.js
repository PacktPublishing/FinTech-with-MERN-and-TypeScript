"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var mocha_1 = require("mocha");
var account_1 = require("../api/account");
mocha_1.describe("Account Number - T1", function () {
    mocha_1.describe("test getPrimaryAccount(memberLastName)", function () {
        it("should return invalid account", function () {
            var account = new account_1["default"]();
            chai_1.expect(account.getPrimaryAccount("Starlord")).to.equal(-1);
        });
    });
});
var should = require("chai").should();
mocha_1.describe("Account Number - T2", function () {
    mocha_1.describe("test getPrimaryAccount(memberLastName)", function () {
        it("should return an account typeOf(Number)", function () {
            var account = new account_1["default"]();
            var response = account.getPrimaryAccount("Raccoon");
            response.should.be.a('string');
        });
    });
});
