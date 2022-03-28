// Write your solution in this file!
const employee = {
    name: "Peter",
    streetAddress: "23 Broadway",
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };
  
    newObj.name = "Sam";
    newObj.streetAddress = "11 Broadway"
  
    return newObj;
  }


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
       
    return employee
  } 



  

  

  function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = { ...employee };

    delete newEmployee.name

    return newEmployee

    
  }


  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee.name

    return employee
  }
