"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const request_status_1 = require("./request-status");
class Request {
    constructor(id = 0, desc = '', status = request_status_1.RequestStatus.NEW) {
        this.id = id;
        this.description = desc;
        this.status = status;
    }
}
exports.Request = Request;
