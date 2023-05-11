import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Item = ({itemData, onPressDelete, onPressEdit}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={onPressEdit}
        style={{position: 'absolute', alignSelf: 'flex-end', paddingRight: 80}}>
        <Text style={{color: 'green', fontWeight: 'bold'}}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressDelete}
        style={{position: 'absolute', alignSelf: 'flex-end', paddingRight: 10}}>
        <Text style={{color: 'red', fontWeight: 'bold'}}>Delete</Text>
      </TouchableOpacity>

      <Text style={styles.itemHead}>
        Id : <Text style={styles.itemData}>{itemData?.id}</Text>
      </Text>
      <Text style={styles.itemHead}>
        Name : <Text style={styles.itemData}>{itemData?.name}</Text>
      </Text>
      <Text style={styles.itemHead}>
        Username : <Text style={styles.itemData}>{itemData?.username}</Text>
      </Text>
      <Text style={styles.itemHead}>
        Email : <Text style={styles.itemData}>{itemData?.email}</Text>
      </Text>
      <Text style={styles.itemHead}>
        Phone : <Text style={styles.itemData}>{itemData?.phone}</Text>
      </Text>
      <Text style={styles.itemHead}>
        Website : <Text style={styles.itemData}>{itemData?.website}</Text>
      </Text>
      <Text style={styles.itemHead}>
        Address :{' '}
        <Text style={styles.itemData}>
          {itemData?.address?.suite +
            ', ' +
            itemData?.address?.street +
            ', ' +
            itemData?.address?.city}
        </Text>
      </Text>
      <Text style={styles.itemHead}>
        Company : <Text style={styles.itemData}>{itemData?.company?.name}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  itemHead: {fontSize: 14, fontWeight: '700'},
  itemData: {fontSize: 14, fontWeight: '300'},
});
export default Item;
