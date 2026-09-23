import {Friend, Colleague, ColleagueHistory } from './myTypes'


const friend1: Friend = {
  name: "Leon Ogunfeyimi",
  phone: "087-12345",
  age: 25,
  dob: new Date("1998-11-20") ,
};

const friend2: Friend = {
  name: "Elijah Destigni",
  phone: "086--12345",
  age: 31,
  
  interests: ['Music', 'Sport']
};

export const friends = [friend1, friend2];
//console.log(friends[1]);

//   -------------------



const colleague1 = {
  name: "Robbie Grogan",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Devin Scholtz",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "Eugene Cocieru",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};
export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};


//console.log(colleagues.current[0]);
