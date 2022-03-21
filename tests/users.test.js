const request = require("supertest");
const app = require("../app");
const { createToken } = require("../service/jwt");

describe("user", () => {
  const userOne = {
    "name": "Damien"
  };
  const userTwo = {
    "name": "Xavier"
  }
  const token = createToken(1);
  it("GET/getAll doit retourner un 200 avec un message Aucun resultat", async () => {
    const res = await request(app).get("/api/users/getAll").expect(200);
    expect(res.body.message).toEqual("Aucun résultat");
  });
  it("POST sans token doit retourner un 401", async () => {
    const res = await request(app).post("/api/users").send(userOne).expect(401);
    expect(res.body.errorMessage).toEqual("No access allowed");
  });
  it("POST doit retourner un 201", async () => {
    const res = await request(app).post("/api/users").set("Authorization", `Bearer ${token}`).send(userOne).expect(201);
    expect(res.body.name).toEqual(userOne.name);
  });
  it("PUT sans token doit retourner un 401", async () => {
    const res = await request(app).put("/api/users/1").send(userTwo).expect(401);
    expect(res.body.errorMessage).toEqual("No access allowed");
  });
  it("PUT avec un mauvais id doit retourner un 400", async () => {
    const res = await request(app).put("/api/users/43").set("Authorization", `Bearer ${token}`).send(userTwo).expect(400);
    expect(res.body.errorMessage).toEqual("Aucune donnée modifiée");
  });
  it("PUT doit retourner un 200", async () => {
    const res = await request(app).put("/api/users/1").set("Authorization", `Bearer ${token}`).send(userTwo).expect(200);
    expect(res.body.name).toEqual(userTwo.name);
  });
  it("GET/getAll doit retourner un 200 avec 1 resultat", async () => {
    const res = await request(app).get("/api/users/getAll").expect(200);
    expect(res.body.length).toEqual(1);
    expect(res.body[0].name).toEqual(userTwo.name)
  });
  it("DELETE sans token doit retourner un 401", async () => {
    const res = await request(app).delete("/api/users/1").expect(401);
    expect(res.body.errorMessage).toEqual("No access allowed");
  });
  it("DELETE avec un mauvais id doit retourner un 400", async () => {
    const res = await request(app).delete("/api/users/43").set("Authorization", `Bearer ${token}`).expect(400);
    expect(res.body.errorMessage).toEqual("Aucune donnée supprimée");
  });
  it("DELETE doit retourner un 200", async () => {
    const res = await request(app).delete("/api/users/1").set("Authorization", `Bearer ${token}`).expect(200);
    expect(res.body.message).toEqual("Donnée supprimée");
  });
});