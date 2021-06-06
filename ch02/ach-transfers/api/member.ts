interface Person {
  uniqueId: number;
  firstName: string;
  lastName: string;
}

class Member implements Person {
  constructor(public uniqueId: number, public firstName: string, public lastName: string) {
  }
}
export default Member
