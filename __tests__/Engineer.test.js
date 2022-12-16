const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Yogi Bear", "1", "yogi@gmail.com","Yogi123");

describe("Engineer", () => {
test("test to see if we can get the constructor engineer values", () => {

    expect(engineer.name).toBe("Yogi Bear");
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("yogi@gmail.com");
    expect(engineer.gitHub).toBe("Yogi123");
});

test('test to see if the getName() method works properly', () => {
    expect(engineer.getName()).toBe("Yogi Bear");
});

test('test to see if the getId() method works properly', () => {
    expect(engineer.getId()).toBe("1");
});

test('test to see if the getEmail() method works properly', () => {
    expect(engineer.getEmail()).toBe("yogi@gmail.com");
});
test('test to see if the getgitHub() method works properly', () => {
    expect(engineer.getGitHub()).toBe("Yogi123");
});
});