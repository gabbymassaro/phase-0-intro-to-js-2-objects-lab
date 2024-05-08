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