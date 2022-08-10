import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (dispatch) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    })

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const initialState = {
    data: [],
    status: STATUS.IDLE,
};
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.status = STATUS.LOADING
        })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = STATUS.ERROR
            })
    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

// export function getProducts () {
//     return async function getProductsThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUS.IDLE));
//         } catch (e) {
//             dispatch(setStatus(STATUS.ERROR));
//         }
//     }
// }