const Intern = require('../lib/Intern');

const intern = new Intern("Yogi Bear", "1", "yogi@gmail.com","UTSA");

describe("Intern", () => {
test("test to see if we can get the constructor intern values", () => {

    expect(intern.name).toBe("Yogi Bear");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("yogi@gmail.com");
    expect(intern.school).toBe("UTSA");
});

test('test to see if the getName() method works properly', () => {
    expect(intern.getName()).toBe("Yogi Bear");
});

test('test to see if the getId() method works properly', () => {
    expect(intern.getId()).toBe("1");
});

test('test to see if the getEmail() method works properly', () => {
    expect(intern.getEmail()).toBe("yogi@gmail.com");
});
test('test to see if the getSchool() method works properly', () => {
    expect(intern.getSchool()).toBe("UTSA");
});
});