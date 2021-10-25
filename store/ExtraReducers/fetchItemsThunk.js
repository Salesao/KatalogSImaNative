import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiCategory = 'https://www.sima-land.ru/api/v3/category/'
const apiItems = 'https://www.sima-land.ru/api/v3/item/'

const podCategory = async (id, {rejectWithValue}) => {
    const podCategoryId = []
    try {
        // console.log(aside_categories_ids);
        const response = await axios.get(apiCategory + id,{
            params:{
                expand:'sub_categories'
            }
        })
        const ApiPodCategory = JSON.parse(JSON.stringify(response.data.sub_categories))
        ApiPodCategory.forEach(podCat => podCategoryId.push(podCat.id))
        const responsePodCategory = await axios.get(apiCategory,{
            params:{
                id:podCategoryId.join()
            }
        })
        // return JSON.parse(JSON.stringify(response.data.items))
        return JSON.parse(JSON.stringify(responsePodCategory.data.items))
    } catch (error) {
        return rejectWithValue(error.message)
    }
}

export const fetchMinCatalog = createAsyncThunk(
    'items/fetchKatalog',
    async function(_,{rejectWithValue}){
        try {
            const response = await axios.get(apiCategory,{
                params:{
                    level:1
                }
            })
            const katalog = JSON.parse(JSON.stringify(response.data.items))
            //фильтруем массив категорий так, чтобы оставить толькj категории с design-config
            // const headerKatalog = katalog.filter(item => item.aside_categories_ids.length)
            return katalog
        } catch (error) {
            return rejectWithValue('ERROR SERVER')
        }
    }
)

export const fetchPodCategoryThunk = createAsyncThunk(
    'fetch/fetchCategory',
    podCategory
)
export const fetchPodCategoryThunkMore = createAsyncThunk(
    'fetch/fetchCategoryMore',
    podCategory
)

export const fetchItemsThunk = createAsyncThunk(
    'items/fetchItems',
    async function(id,{rejectWithValue}){
        // const test = []
        try {
            const response = await axios.get(apiItems,{
                params:{
                    category_id:id
                }
            })
            return JSON.parse(JSON.stringify(response.data.items))
            //в API ничего не нашёл, чтобы реализовать LazyLoading. решил что-то своё придумать, не получилось :(
            // const categoryItems = JSON.parse(JSON.stringify(response.data.items))
            // categoryItems.map(cat => test.push(cat.id))
            // const filter = test.filter((t,i) => i < 10)
            // console.log(filter);
            // const getItemsFilter = await axios.get(apiItems,{
            //     params:{
            //         id:filter.join()
            //     }
            // })
            // return JSON.parse(JSON.stringify(getItemsFilter.data.items))
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)