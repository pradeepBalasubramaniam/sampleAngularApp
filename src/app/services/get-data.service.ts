import { Injectable } from "@angular/core";
import { delay } from "q";

const users: Array<any> = [
  {
    id: "as3489af9df",
    name: "Mike",
    age: "23",
    role: "Developer",
    dob: new Date(1998, 3, 15),
    salary: 4000
  },
  {
    id: "idf9359sgf9",
    name: "Alice",
    age: "27",
    role: "QA",
    dob: new Date(1993, 3, 15),
    salary: 3500
  },
  {
    id: "jngsf9gs8gyf",
    name: "Alex",
    age: "30",
    role: "Designer",
    dob: new Date(1990, 3, 15),
    salary: 3500
  }
];

@Injectable({
  providedIn: "root"
})
export class GetDataService {
  constructor() {}

  getUsers() {
    return users;
  }

  getUserByid(id) {
    return users.filter(d => d.id === id)[0];
  }

  firstRow() {
    return users[0];
  }
}
