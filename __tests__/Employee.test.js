const Employee = require('../lib/Employee');

const employee = new Employee("Yogi Bear", "1", "yogi@gmail.com");

describe("Employee", () => {
test("test to see if we can get the constructor employee values", () => {

    expect(employee.name).toBe("Yogi Bear");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("yogi@gmail.com");

});

test('test to see if the getName() method works properly', () => {
    expect(employee.getName()).toBe("Yogi Bear");
});

test('test to see if the getId() method works properly', () => {
    expect(employee.getId()).toBe("1");
});

test('test to see if the getEmail() method works properly', () => {
    expect(employee.getEmail()).toBe("yogi@gmail.com");
});
});

