const request = require("supertest");

const app = require("../app");

describe("API", () => {
  let api;

  beforeAll(() => {
    api = app.listen(3030);
  });

  afterAll((done) => {
    api.close(done);
  });

  // it = test
  it("Responds to GET resquest at / with a 200 status", (done) => {
    request(api).get("/").expect(200, done);
  });
});
