//state is not application state, only state of this reducer
//State can’t be returned as undefined
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;   
    }
    return state;
}