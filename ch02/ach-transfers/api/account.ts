export interface AccountPrototype {
  clone(): AccountPrototype;
  getPrimaryAccount(object: string): number;
}

export default class Account implements AccountPrototype {
  clone(): AccountPrototype {
    return new Account();
  }
  getPrimaryAccount(lastName: string): number {
    let account = -1;
    if (lastName === "Raccoon") {
      let min = 10000;
      let max = 99999;
      account = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return account;
  }
}
