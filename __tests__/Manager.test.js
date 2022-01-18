test('creates a Manager object', () => {
    const employee = new Employee('Manager');
  
    expect(employee.name).toBe('Manager');
  });