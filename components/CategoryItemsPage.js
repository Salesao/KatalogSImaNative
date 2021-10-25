import React, { useEffect } from 'react'
import { View, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPodCategoryThunk } from '../store/ExtraReducers/fetchItemsThunk'
import { fetchItemsState } from '../store/Reducers/fetchItemsSlice'
import { UiList } from './UiList'

export const CategoryItemsPage = ({route, navigation}) => {
    const {aside_categories_ids: asideId, id} = route.params
    const {categoryItems, status, error} = useSelector(fetchItemsState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPodCategoryThunk(id))
    }, [])
    
    return (
        <UiList data={categoryItems} navigation={navigation} page="podCategory"/>
    )
}
