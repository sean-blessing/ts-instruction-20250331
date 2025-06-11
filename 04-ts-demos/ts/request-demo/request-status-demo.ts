import { Request } from "./request";
import { RequestStatus } from "./request-status";
console.log("Welcome to the enum demo");

let req: Request = new Request(1, "test", RequestStatus.APPROVED);


console.log("Request", req);




console.log("Bye");