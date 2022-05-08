export const initialState = {
    basket: [], 
};

// This functions is responsible of calculating to the total price of all the items; 

export const getBasketTotal = (basket) => basket?.reduce( (total, item) => item.price + total , 0 )

// whenever the user clicks on add to basket button this function will update the basket array above

const reducer = (state, action) => {

    
    switch(action.type) {
        
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
                
            };
            
        case "REMOVE_FROM_BASKET":

                const index = state.basket.findIndex( (basketItem) => basketItem.id === action.item.id );
                console.log(index); 
    
                let newBasket = [...state.basket];
            
                if (index >= 0) {
                    newBasket.splice(index , 1);
                }else {
                    console.warn( `You can't delete the product ${action.id}` )
                };
            
                return {
                    ...state,
                    basket: newBasket
                }
            
        default:
            return state;
    };
    
};

export default reducer;