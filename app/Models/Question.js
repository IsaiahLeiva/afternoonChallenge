import { generateId } from "../Utils/generateId";


export class Question {
    constructor(data) {
        this.id(generateId)
        this.difficulty = data.difficulty
        this.category = data.category
        this.type = data.type
    }

}