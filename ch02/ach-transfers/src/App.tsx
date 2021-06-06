import { Component } from "react";
import Member from "../api/member";
import Account from "../api/account";

let member = new Member(1234567890, "Rocket", "Raccoon");
const accountNumber = new Account().getPrimaryAccount(member.lastName);

export default class App extends Component {
  render = () =>
    <div>
      <h2 className={"display-2"}>ACH Transfers Manager</h2>
      <h3>Member</h3>
        <div>
          <label htmlFor="personKey">Person Key: </label>
          <input type="text" id="personKey" value={member.uniqueId} readOnly />
      </div>
      <div>
          <label htmlFor="accountNumber">Pri. Account #: </label>
          <input type="text" id="accountNumber" value={accountNumber} readOnly />
        </div>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" value={member.firstName} readOnly />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" value={member.lastName} readOnly />
        </div>
    </div>
}