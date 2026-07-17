import { createSlice } from "@reduxjs/toolkit";
const savedCart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
    list: savedCart || []
}
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        clearAll: (state) => {
            state.list=[]
            localStorage.setItem("cart", JSON.stringify(state.list));
        },
        addItem: (state,action) => {
            let isAdd = false
            state.list = state.list?.map((e) =>{
                if(e.id == action.payload.id){
                    e.quantity = e.quantity + 1
                    isAdd = true
                }
                return e
            })
            if(!isAdd){
                state.list.push({...action.payload , quantity: 1})
            }
            localStorage.setItem("cart", JSON.stringify(state.list));
        },
        removeItem: (state,action) => {
            state.list = state.list?.filter(e => {
                if (e.id == action.payload){
                    e.quantity = e.quantity - 1
                    if(e.quantity == 0){
                        return false
                    } 
                    return e
                }
                return true
            })
            localStorage.setItem("cart", JSON.stringify(state.list));
        }
    }
})
export const { clearAll , removeItem , addItem } =cartSlice.actions
export default cartSlice.reducer