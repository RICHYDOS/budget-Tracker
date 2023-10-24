import {sequelize} from "../core/database/sequelize";
// Example Test
const add = function (a: number, b: number) {
    return a + b;
}

beforeAll(async () => {
  await sequelize.authenticate();
});

test('add function should return the sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

afterAll(async () => {
  await sequelize.close();
});