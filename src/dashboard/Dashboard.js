import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, FlatList, ScrollView} from 'react-native';
import axios from 'axios';
import Item from '../components/FlatListItem/Item';
import Form from '../components/Form/Form';
let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);
const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const [newUserData, setNewUserData] = useState({
    street: '',
    suite: '',
    city: '',
    companyName: '',
    email: '',
    name: '',
    phone: '',
    username: '',
    website: '',
  });
  const [editable, setEditable] = useState(true);
  const [index, setIndex] = useState(true);

  const getData = async () => {
    try {
      const users = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      if (users?.data?.length > 0) {
        setUsersData(users?.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  const deleteItem = index => {
    let array = [...usersData];
    array.splice(index, 1);
    setUsersData(array);
  };
  const addNewUser = () => {
    let data = {
      address: {
        city: newUserData?.city,
        geo: {lat: '-38.2386', lng: '57.2232'},
        street: newUserData?.street,
        suite: newUserData?.suite,
        zipcode: '31428-2261',
      },
      company: {
        bs: 'target end-to-end models',
        catchPhrase: 'Centralized empowering task-force',
        name: newUserData?.companyName,
      },
      email: newUserData?.email,
      id: usersData?.length + 1,
      name: newUserData?.name,
      phone: newUserData?.phone,
      username: newUserData?.username,
      website: newUserData?.website,
    };
    let array = [...usersData, data];
    setUsersData(array);
    setNewUserData({
      street: '',
      suite: '',
      city: '',
      companyName: '',
      email: '',
      name: '',
      phone: '',
      username: '',
      website: '',
    });
  };
  const editUser = ({item, index}) => {
    setEditable(false);
    setNewUserData({
      street: item?.address?.street,
      suite: item?.address?.suite,
      city: item?.address?.city,
      companyName: item?.company?.name,
      email: item?.email,
      name: item?.name,
      phone: item?.phone,
      username: item?.username,
      website: item?.website,
    });
  };
  const updateUser = () => {
    usersData[index].address['suite'] = newUserData?.suite
    usersData[index].address['city'] = newUserData?.city
    usersData[index].address['street'] = newUserData?.street
    setEditable(true)
    setNewUserData({
        street: '',
        suite: '',
        city: '',
        companyName: '',
        email: '',
        name: '',
        phone: '',
        username: '',
        website: '',
      })
  };
  const renderItems = item => {
    // console.log('itrmsssssss',item)

    return (
      <Item
        itemData={item?.item}
        onPressDelete={() => {
          deleteItem(item?.index);
        }}
        onPressEdit={() => {
          setIndex(item?.index);
          editUser(item);
        }}
      />
    );
  };

  useEffect(() => {
    getData();
  }, []);
  //   console.log('usersData', usersData);

  return (
    <View
      style={{
        height: screenHeight * 0.9,
        width: screenWidth,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Users Data</Text>
      <ScrollView style={{width:screenWidth,maxHeight:350,marginBottom:10}}>
        <Form
          name={newUserData?.name}
          userName={newUserData?.username}
          email={newUserData?.email}
          phone={newUserData?.phone}
          website={newUserData?.website}
          hno={newUserData?.suite}
          street={newUserData?.street}
          city={newUserData?.city}
          companyName={newUserData?.companyName}
          onNameChange={text => {
            setNewUserData({...newUserData, name: text});
          }}
          onUserNameChange={text => {
            setNewUserData({...newUserData, username: text});
          }}
          onEmailChange={text => {
            setNewUserData({...newUserData, email: text});
          }}
          onPhoneChange={text => {
            setNewUserData({...newUserData, phone: text});
          }}
          onWebsiteChange={text => {
            setNewUserData({...newUserData, website: text});
          }}
          onhnoChange={text => {
            setNewUserData({...newUserData, suite: text});
          }}
          onStreetChange={text => {
            setNewUserData({...newUserData, street: text});
          }}
          onCityChange={text => {
            setNewUserData({...newUserData, city: text});
          }}
          onCompanyNameChange={text => {
            setNewUserData({...newUserData, companyName: text});
          }}
          onPressAdd={() => {
            editable ? addNewUser() : updateUser();
          }}
          editable={editable}
        />
      </ScrollView>
      <View
        style={{
          width: '100%',
          borderWidth: 0.5,
          borderRadius: 10,
          height:400
        }}>
        <FlatList
          data={usersData}
          contentContainerStyle={{
            padding: 10,
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItems}
        />
      </View>
    </View>
  );
};
export default Dashboard;
