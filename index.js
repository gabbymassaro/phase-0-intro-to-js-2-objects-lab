const employee = {name: 'Bob', streetAddress: '708 Anderson Ave.'};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  const updateEmployee = {...employee};
  updateEmployee[name] = streetAddress;
  return updateEmployee;
}

// console.log(employee);

// const updateEmployee = updateEmployeeWithKeyAndValue(employee, "Sam", "800 Park Ave");
// console.log(updateEmployee); 


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
  employee[name] = streetAddress;
  return employee;
};

// destructivelyUpdateEmployeeWithKeyAndValue(employee, "Gabby", "2368 S. Whittmore");
// console.log(employee); 