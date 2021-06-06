import { expect } from "chai";
import { describe } from "mocha";
import Account from "../api/account";

describe("Account Number - T1", () => {
  describe("test getPrimaryAccount(memberLastName)", () => {
    it("should return invalid account", () => {
      let account = new Account();
      expect(account.getPrimaryAccount("Starlord")).to.equal(-1);
    });
  });
});

let should = require("chai").should();

describe("Account Number - T2", () => {
  describe("test getPrimaryAccount(memberLastName)", () => {
    it("should return an account typeOf(Number)", () => {
      let account = new Account();
      const response = account.getPrimaryAccount("Raccoon");
      response.should.be.a('string');
    });
  });
});
