const employee = {name: 'Bob', streetAddress: '708 Anderson Ave.'};

function updateEmployeeWithKeyAndValue(employee, name, newName) {
  const updateEmployee = {...employee};
  updateEmployee[name] = newName;
  return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, newStreetAddress){
  employee[streetAddress] = newStreetAddress;
  return employee;
};

function deleteFromEmployeeByKey(employee, streetAddress) {
  const deleteEmployee = {...employee};
  delete deleteEmployee[streetAddress];
  return deleteEmployee;
};


function destructivelyDeleteFromEmployeeByKey(employee, streetAddress) {
  delete employee[streetAddress];
  return employee;
};


// ------------- console logging lives here ----------------// 
console.log("original: ", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', "cinderella");
console.log("updated: ", updatedEmployee);

const destructEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', "800 Park Ave");
console.log("destructively update street: ", employee);


const deleteEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Employee after deletion:", deleteEmployee);

const destructDeleteEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Destructively Delete Street Address: ", employee);