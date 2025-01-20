/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  //id : 1, Name : john, Age : 18, Profession : developer

  arr.map((employee) => {
    if(employee.profession === "developer") {
      console.log(`id : ${employee.id}, Name  : ${employee.name}, Age : ${employee.age}, Profession  : ${employee.profession}`);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if(employee.profession === "developer") {
      console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
    }
  })

}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(newEmployee);
  arr.map((employee)=>{
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => {
    if(!(employee.profession === "admin")){
      return true;
    }
  })

  arr.map((employee)=> {
    console.log(`id : ${employee.name}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let newObject = [
    {id: 5, name: "Rohit", Age: "23", profession: "Developer"},
    {id: 6, name: "Rahul", Age: "24", profession: "Engineer"},
    {id: 7, name: "Rohan", Age: "20", profession: "Manager"}
  ]

  arr = arr.concat(newObject);

  arr.map((employee) => {
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
}
