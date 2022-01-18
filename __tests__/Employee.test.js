const Employee = require('../lib/Employee.js');

test('creates a Employee object', () => {
  const employee = new Employee('Engineer');

  expect(employee.name).toBe('Engineer');
});



