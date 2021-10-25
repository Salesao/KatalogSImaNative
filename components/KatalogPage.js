import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMinCatalog} from '../store/ExtraReducers/fetchItemsThunk';
import {fetchItemsState} from '../store/Reducers/fetchItemsSlice';
import { UiList } from './UiList';

export const KatalogPage = ({navigation}) => {
  const dispatch = useDispatch();

  const {katalog} = useSelector(fetchItemsState);

  useEffect(() => {
    dispatch(fetchMinCatalog());
  }, []);

  return (
      <UiList navigation={navigation} data={katalog} page='category'/>
  );
};
