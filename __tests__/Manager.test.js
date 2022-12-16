const Manager = require('../lib/Manager');

const manager = new Manager("Yogi Bear", "1", "yogi@gmail.com","11");

describe("Manager", () => {
test("test to see if we can get the constructor manager values", () => {

    expect(manager.name).toBe("Yogi Bear");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("yogi@gmail.com");
    expect(manager.officeNumber).toBe("11");
});

test('test to see if the getName() method works properly', () => {
    expect(manager.getName()).toBe("Yogi Bear");
});

test('test to see if the getId() method works properly', () => {
    expect(manager.getId()).toBe("1");
});

test('test to see if the getEmail() method works properly', () => {
    expect(manager.getEmail()).toBe("yogi@gmail.com");
});
test('test to see if the getofficeNumber() method works properly', () => {
    expect(manager.getOfficeNumber()).toBe("11");
});
});