import {createSlice} from "@reduxjs/toolkit";
import {categories} from "../StoreData/CategoryData";

const categorySlice = createSlice({
    name:"categories",
    initialState: categories,
    reducers:{
        addCategory: (state, action) =>{
            state.push(action.payload);
        },
        updateCategory: (state, action) =>{
            const {id, name} = action.payload;
            const existing = state.find(i=> i.id == id);
            if(existing){
                existing.name = name;
            }
        },
        deleteCategory:(state, action)=>{
            const{id} = action.payload;
            const existing = state.filter(i=>i.id == id);
            if(existing){
                return state.filter(i=>i.id!=id);
            }
        }
    }
});

export const {addCategory,updateCategory, deleteCategory} = categorySlice.actions;
export default categorySlice.reducer;