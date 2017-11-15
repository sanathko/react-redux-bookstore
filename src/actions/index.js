export function selectBook(book) {
    //Select book is an action creator that needs to return an action
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}