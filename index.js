const { makeEmployeeController } = require("./controllers/Employee");
const { makeDb } = require("./db");
const { makeServer } = require("./server");
const { makeApi } = require("./api");

makeDb();
const server = makeServer();
const controller = makeEmployeeController();
const api = makeApi({ router: server.router, controller });
