const Employee = require('../lib/Employee.js');

test('Checks for required Employee properties', () => {
    const employee = new Employee;
    expect(employee.name).toEqual(expect.any(String));
    console.log(`Employee Name: ${employee.name}`)
    expect(employee.id).toEqual(expect.any(Number));
    console.log(`Employee ID: ${employee.id}`)
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employee Email: ${employee.email}`)
});

test('Gets employees name', () => {
    const employee = new Employee;
    expect(employee.getName()).toEqual(expect.any(String));
    console.log(`Employee getName(): ${employee.getName()}`)
});

test('Gets employees id', () => {
    const employee = new Employee;
    expect(employee.getId()).toEqual(expect.any(String));
    console.log(`Employee getId(): ${employee.getId()}`)
}); // getId returns a string btw

test('Gets employees email', () => {
    const employee = new Employee;
    expect(employee.getEmail()).toEqual(expect.any(String));
    console.log(`Employee getEmail(): ${employee.getEmail()}`)
});

test('Gets employees role', () => {
    const employee = new Employee;
    expect(employee.getRole()).toBe('Employee');
    // Returns 'Employee'
    console.log(`Employee getRole(): ${employee.getRole()}`)
});