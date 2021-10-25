import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert
} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchItemsState} from '../store/Reducers/fetchItemsSlice';

export const UiList = ({data, navigation, page}) => {
  const notImage = 'https://dual.by/analysis/img/not-available.png';

  const {status, error} = useSelector(fetchItemsState);

  return (
    <View>
      {status === 'rejected' && Alert.alert(error)}
      {status === 'loading' ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          onEndReached={() => console.log('test')}
          numColumns={2}
          style={{width:'100%'}}
          contentContainerStyle={{alignItems:'center'}}
          data={data}
          initialNumToRender={6}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(page, item)}
              style={{marginVertical:20,marginLeft:index % 2 !== 0?10:0}}>
              <View style={{position: 'relative'}}>
                <View
                  style={styles.ConatinerNaming}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <Image
                  style={[styles.image]}
                  source={{
                    uri: item.photo 
                    ? item.photo 
                    : item.icon
                    ?item.icon
                    :notImage,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginTop: 5,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  ConatinerNaming: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    backgroundColor: '#fff',
    width: 150,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
