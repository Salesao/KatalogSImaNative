import React, { useEffect } from 'react'
import { ActivityIndicator, Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsThunk } from '../store/ExtraReducers/fetchItemsThunk';
import { fetchItemsState } from '../store/Reducers/fetchItemsSlice';

export const ItemsPage = ({route}) => {

    const {id} = route.params
    const dispatch = useDispatch()
    const {items, status, error} = useSelector(fetchItemsState)

    useEffect(() => {
        dispatch(fetchItemsThunk(id))
    },[])

    return (
        <>
        {status === 'rejected' && Alert.alert(error)}
        {status === 'loading'
        ?<ActivityIndicator size="large"/>
        :<FlatList
        data={items}
        renderItem={({item, index}) => {
        return <TouchableOpacity activeOpacity={0.7} style={[styles.ContainerItems,
        {marginBottom: index === items.length - 1 ?20:0}]}>
            <Image
                source={{
                    uri:item.img
                }}
                style={styles.image}/>
                <View style={{justifyContent:'space-around'}}>
                    <Text style={styles.nameItem}>{item.name}</Text>
                    <Text style={styles.priceItem}>Цена:{item.price}руб.</Text>
                </View>
        </TouchableOpacity>
        }}
        keyExtractor={item => item.id.toString()}/>
    }
        </>
    )
}

const styles = StyleSheet.create({
    ContainerItems:{
        flexDirection:'row',
        marginTop:20,
        borderRadius:10,
        padding:10,
        borderWidth:1,
        borderColor:'#000',
        width:'100%',
        height:100,
        borderColor:'#000'
    },
    image:{
        width:'25%',
        height:'100%',
        borderRadius:10
    },
    nameItem:{
        fontWeight:'600',
        fontSize:13,
        color:'#000'
    },
    priceItem:{
        fontWeight:'bold',
        fontSize:15,
        color:'#000'
    }
})
