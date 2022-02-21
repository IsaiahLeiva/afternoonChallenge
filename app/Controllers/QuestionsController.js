import { ProxyState } from "../AppState"

function _drawBooks() {
    let template = ''
    ProxyState.books.forEach(b => template += `<li>${b.name}</li>`)
    document.getElementById('books').innerHTML = template
}

export class TriviaAPIService {
    constructor() {
        console.log('trivia API controller loaded');

    }
}



