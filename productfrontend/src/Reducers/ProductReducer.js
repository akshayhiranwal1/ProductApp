import {createSlice} from "@reduxjs/toolkit";
import {products} from "../StoreData/ProductData";

const productSlice = createSlice({
    name:"products",
    initialState:products,
    reducers:{
        searchByCat: (state, action) => {
            const {id} = action.payload;
            let result = [];
            console.log("CatId:"+id);
            if(id==0) {
                result = state;
            }
            else {
                result = state.filter(i => i.fkCategoryId == id);
            }

            return result;
        },
        addProduct:(state, action) =>{
            state.push(action.payload);
        },
        deleteProduct:(state, action)=> {
            const {id} = action.payload;
            var existing = state.filter(i=>i.id == id);
            if(existing){
                return state.filter(i=>i.id!=id);
            }
        },
        updateProduct:(state, action) =>{
            const {id, description, canExpired,expiryDate,fkCategoryId, price, isSpecial} = action.payload;
            let existing = state.find(i=>i.id == id);
            if(existing) {
                existing.description = description;
                existing.canExpired = canExpired;
                existing.expiryDate = expiryDate;
                existing.fkCategoryId = fkCategoryId;
                existing.price = price;
                existing.isSpecial = isSpecial;
            }
        }
    }
})

export const {searchByCat,
    addProduct,
    deleteProduct,
    updateProduct} = productSlice.actions;
export default productSlice.reducer;