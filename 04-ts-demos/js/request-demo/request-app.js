"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
const request_status_1 = require("./request-status");
console.log("welcome to the request app");
let req = new request_1.Request(1, "test", request_status_1.RequestStatus.NEW);
console.log(req);
console.log("bye");
