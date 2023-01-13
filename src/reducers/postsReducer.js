
//state -> posts
// new post -> action.payload

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
             return action.payload;
        case 'CREATE':
             return [...state, action.payload];
        default:
            return state;
    }
}

export default postsReducer;