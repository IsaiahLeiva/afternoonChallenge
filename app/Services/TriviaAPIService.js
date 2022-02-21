import { ProxyState } from "../AppState";



class TriviaAPIService {
    async getBooks() {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=10')
        console.log('response data', response.data);
        let books = response.data.results.map(b => new books(b))
        ProxyState.books = books
    }


}