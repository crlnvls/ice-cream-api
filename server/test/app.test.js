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

  it("Responds to GET resquest at / flavours a 200 status", (done) => {
    request(api).get("/flavours").expect(200, done);
  });

  it("Responds to GET resquest at / flavorous with a JSON object", (done) => {
    request(api).get("/flavours").expect("Content-Type", /json/, done);
  });

  //   it("Responds to GET resquest at / flavorous with a JSON object that has a 'flavours' key", (done) => {
  //     request(api)
  //       .get("/flavours")
  //       .end(async (err, res) => {
  //         try {
  //           expect.assertions(2);
  //           //res.body = res.json
  //           const data = res.body;
  //           expect("flavours" in data);
  //           expect(data["flavours"] instanceof Array);
  //           done();
  //         } catch (err) {
  //           done(err);
  //         }
  //       });
  //   });
});
