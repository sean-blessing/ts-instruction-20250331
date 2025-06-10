"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
class Actor {
    constructor(id = 0, firstName = '', lastName = '', birthDate = new Date(), gender = '') {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
    }
    toString() {
        return `Actor: id ${this.id}, ${this.lastName}, ${this.firstName} born on ${this.birthDate}, ${this.gender}`;
    }
}
exports.Actor = Actor;
