const Intern = require('../lib/Intern.js');

test('Checks for inherited Employee properties', () => {
    const intern = new Intern;
    expect(intern.name).toEqual(expect.any(String));
    console.log(`Intern name: ${intern.name}`)
    expect(intern.id).toEqual(expect.any(Number));
    console.log(`Intern id: ${intern.id}`)
    expect(intern.email).toEqual(expect.any(String));
    console.log(`Intern email: ${intern.email}`)
});

test('Checks for school', () => {
    const intern = new Intern;
    expect(intern.school).toEqual(expect.any(String));
    console.log(`Intern school: ${intern.school}`)
});

test('Checks for office number', () => {
    const intern = new Intern;
    expect(intern.getSchool()).toEqual(expect.any(String));
    console.log(`Intern getSchool(): ${intern.getSchool()}`)
});

test('Gets Intern role', () => {
    const intern = new Intern;
    expect(intern.getRole()).toBe('Intern');
    console.log(`Intern getRole(): ${intern.getRole()}`)
    // Returns 'Intern'
});