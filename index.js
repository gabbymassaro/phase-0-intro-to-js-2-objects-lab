const employee = {name: 'Bob', streetAddress: '708 Anderson Ave.'};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  const updateEmployee = {...employee};
  updateEmployee[name] = streetAddress;
  return updateEmployee;
}

// console.log(employee);

// const updateEmployee = updateEmployeeWithKeyAndValue(employee, "Sam", "800 Park Ave");
// console.log(updateEmployee); 