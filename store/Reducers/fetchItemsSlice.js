import { createSlice } from '@reduxjs/toolkit';
import { fetchPodCategoryThunk, fetchMinCatalog, fetchPodCategoryThunkMore, fetchItemsThunk } from '../ExtraReducers/fetchItemsThunk';

const setError = (state, {payload}) => {
    state.status = 'rejected'
    state.error = payload
}

const setLoading = (state) => {
    state.status = 'loading'
    state.error = null
}

const fetchItems = createSlice({
    name:'items',
    initialState:{
        categoryItems:[],
        categoryItems2:[],
        katalog:[],
        items:[],
        status:null,
        error:null
    },
    reducers:{},
    extraReducers:{
        [fetchMinCatalog.fulfilled.type]: (state, {payload}) => {
            state.katalog = payload
            state.status = 'done'
        },
        [fetchMinCatalog.pending.type]: setLoading,
        [fetchMinCatalog.rejected.type]: setError,
//////////////////////////////////////////////////////////////////
        [fetchPodCategoryThunk.fulfilled.type]: (state, {payload}) => {
            state.categoryItems = payload
            state.status = 'done'
            console.log(payload[0].icon);
        },
        [fetchPodCategoryThunk.pending.type]: setLoading,
        [fetchPodCategoryThunk.rejected.type]: setError,
//////////////////////////////////////////////////////////////////
        [fetchPodCategoryThunkMore.fulfilled.type]: (state, {payload}) => {
            state.categoryItems2 = payload
            state.status = 'done'
        },
        [fetchPodCategoryThunkMore.pending.type]: setLoading,
        [fetchPodCategoryThunkMore.rejected.type]: setError,
//////////////////////////////////////////////////////////////////
        [fetchItemsThunk.fulfilled.type]: (state, {payload}) => {
            //реализация добавления в массив через lazyLoad(была бы)
            // state.items = [...state.items, ...payload]
            state.items = payload
            state.status = 'done'
        },
        [fetchItemsThunk.pending.type]: setLoading,
        [fetchItemsThunk.rejected.type]: setError,
    }
})

export default fetchItems.reducer
export const fetchItemsState = state => state.fetchItems