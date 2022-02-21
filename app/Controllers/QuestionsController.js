import { ProxyState } from "../AppState"



function _drawQuestion() {
    let questions = ProxyState.questions;
    let template = ''
    questions.forEach(q => questionsTemplate += q.template)
    document.getElementById("").innerHTML

}


export class Question {
    constructor(difficulty, category, type) {
        this.difficulty = difficulty
        this.category = category
        this.type = type

    }

}