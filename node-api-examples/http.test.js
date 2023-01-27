const server = require("./http");
const req = require("supertest");

describe("Testing the server", () => {
    describe("Testing the root route", () => {
        it("/ should get back a 200", (done) => {
            req(server).get("/").expect(200).end((err) => {
                if(err){
                    throw err;
                } else {
                    done();
                }
            })
        })
    })

    describe("Testing the /data route", () => {
        it("/data should get back a 200", (done) => {
            req(server).get("/data").expect(200).end((err) => {
                if(err){
                    throw err;
                } else {
                    done();
                }
            })
        })

        it("/data should display my name", (done) => {
            req(server).get("/data").expect(200).end((err, res) => {
                if(err) {
                    throw err;
                } else {
                    console.log(res.body.data.name);
                    expect(res.body.data.name).toBe("Chinedu");
                    done();
                }
            })
        })
    })
})