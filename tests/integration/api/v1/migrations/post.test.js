import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST to api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response1.status).toBe(201);

  const response1Body = await response1.json();
  const response1BodyNames = response1Body.map((migration) => migration.name);

  const databaseResponse1 = await database.query("SELECT * from pgmigrations;"); // Check if the database is up
  const databaseResponse1Names = databaseResponse1.rows.map(
    (migration) => migration.name,
  );
  expect(response1BodyNames).toEqual(databaseResponse1Names);

  expect(Array.isArray(response1Body)).toBe(true);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);
  const response2Body = await response2.json();
  expect(Array.isArray(response2Body)).toBe(true);
  expect(response2Body.length).toBe(0);
});
