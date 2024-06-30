import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron thunk ile PUBG ürünlerini getiren fonksiyon
export const getSlicePubgThunk = createAsyncThunk('pubg/get', async () => {
    const res = await axios.get('http://localhost:5000/api/Pubg');
    return res.data;
});

// Sepete ürün ekleme işlevi (addToCart reducer)
const pubgSlice = createSlice({
    name: 'pubg',
    initialState: {
        loading: false,
        products: [],
        error: null,
        items: [], // Sepetteki ürünleri burada saklayabilirsiniz
    },
    reducers: {
        addToCart: (state, action) => {
            // Sepete ürün eklemek için reducer
            const newItem = action.payload;
            state.items = [...state.items, newItem];
        },
        removeFromCart: (state, action) => {
            // Sepetten ürün çıkarmak için reducer
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSlicePubgThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSlicePubgThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getSlicePubgThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const { addToCart } = pubgSlice.actions; // addToCart action'ını dışa aktar

export const pubgReducer = pubgSlice.reducer; // Reducer'ı dışa aktar

// Sepete ürün eklemek ve ardından API'ye post etmek için thunk oluşturma
export const addProductToCart = (product) => async (dispatch) => {
    try {
        dispatch(addToCart(product)); // Redux store'a addToCart eylemini gönderiyoruz

        // API'ye post işlemi
        const res = await axios.post('http://localhost:5000/api/Cart', product);
        console.log('Ürün sepete başarıyla eklendi ve sunucuya gönderildi:', res.data);
    } catch (error) {
        console.error('Ürün sepete eklenirken bir hata oluştu:', error.message);
        // Hata durumunda gerekli işlemler yapılabilir (örneğin, kullanıcıya hata mesajı göstermek)
    }
};
