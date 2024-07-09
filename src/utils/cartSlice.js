import { createAction,  createReducer } from "@reduxjs/toolkit";


const initialState = {
  items: [],
};


 const addItem = createAction('addItem');
 const clearCart = createAction('claerCart');



 export const cartReducer = createReducer(initialState, (builder) => {
    builder.
          addCase(addItem, (state, action) =>{
            state.items.push(action.payload)
          })
          .addCase(clearCart, (state) =>{
            state.items.length = 0;
          });
});

const cartSlice = {
    name:"cart",
    reducer : cartReducer,
    action  :{addItem, clearCart},
}

export { addItem, clearCart }    ;
export default cartSlice.reducer;
