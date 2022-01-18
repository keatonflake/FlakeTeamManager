test('creates a Employee object', () => {
    const employee = new Employee('Intern');
  
    expect(employee.name).toBe('Intern');
  });