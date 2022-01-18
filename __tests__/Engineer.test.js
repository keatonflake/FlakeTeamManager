test('creates a Employee object', () => {
    const employee = new Employee('Engineer');
  
    expect(employee.name).toBe('Engineer');
  });