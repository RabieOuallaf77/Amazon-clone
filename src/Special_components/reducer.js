export const initialState = {
    basket: [], 
};

// whenever the user clicks on add to basket button this function will update the baskter array above

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state
    };

};

export default reducer;