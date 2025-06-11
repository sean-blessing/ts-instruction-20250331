"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
const request_status_1 = require("./request-status");
console.log("Welcome to the enum demo");
let req = new request_1.Request(1, "test", request_status_1.RequestStatus.APPROVED);
console.log("Request", req);
console.log("Bye");
