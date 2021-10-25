import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPodCategoryThunkMore } from '../store/ExtraReducers/fetchItemsThunk'
import { fetchItemsState } from '../store/Reducers/fetchItemsSlice'
import { UiList } from './UiList'

export const MoreCategory = ({route, navigation}) => {
    const {aside_categories_ids: asideId, id} = route.params
    const {categoryItems2} = useSelector(fetchItemsState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPodCategoryThunkMore(id))
    }, [])
    
    return (
        <UiList data={categoryItems2} navigation={navigation} page="items"/>
    )
}