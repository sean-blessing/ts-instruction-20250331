import { RequestStatus } from "./request-status"

export class Request {
    id: number;
    description: string;
    status: RequestStatus;

    constructor(id: number = 0, desc: string = '', status: RequestStatus = RequestStatus.NEW) {
        this.id = id;
        this.description = desc;
        this.status = status
    }
}