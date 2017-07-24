import { Quote } from './../data/quote.interface';
export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorite(quote: Quote) {
        
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorite(quote: Quote) {
        const pos = this.favoriteQuotes.findIndex((quoteToFind: Quote) => {
            return quoteToFind.id === quote.id;
        })
        this.favoriteQuotes.splice(pos, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteToFind: Quote) => {
            return quoteToFind.id === quote.id;
        })
    }
}