import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
  StyleSheet,
} from 'react-native';
let screenWidth = Math.round(Dimensions.get('window').width);

const Form = ({
  name,
  userName,
  email,
  phone,
  website,
  hno,
  street,
  city,
  companyName,
  onNameChange,
  onUserNameChange,
  onEmailChange,
  onPhoneChange,
  onWebsiteChange,
  onhnoChange,
  onStreetChange,
  onCityChange,
  onCompanyNameChange,
  onPressAdd,
  editable,
}) => {
  return (
    <View style={styles.mainView}>
      <TextInput
        value={name}
        onChangeText={onNameChange}
        style={styles.inputStyle}
        placeholder="Name"
        editable={editable}
      />
      <TextInput
        value={userName}
        onChangeText={onUserNameChange}
        style={styles.inputStyle}
        placeholder="User Name"
        editable={editable}
      />
      <TextInput
        value={email}
        onChangeText={onEmailChange}
        style={styles.inputStyle}
        placeholder="Email"
        editable={editable}
      />
      <TextInput
        value={phone}
        onChangeText={onPhoneChange}
        style={styles.inputStyle}
        placeholder="Phone"
        editable={editable}
      />
      <TextInput
        value={website}
        onChangeText={onWebsiteChange}
        style={styles.inputStyle}
        placeholder="Website"
        editable={editable}
      />
      <TextInput
        value={hno}
        onChangeText={onhnoChange}
        style={styles.inputStyle}
        placeholder="Suite / House / Flat Number"
      />
      <TextInput
        value={street}
        onChangeText={onStreetChange}
        style={styles.inputStyle}
        placeholder="Street"
      />
      <TextInput
        value={city}
        onChangeText={onCityChange}
        style={styles.inputStyle}
        placeholder="City"
      />
      <TextInput
        value={companyName}
        onChangeText={onCompanyNameChange}
        style={styles.inputStyle}
        placeholder="Company Name"
        editable={editable}
      />
      <View style={styles.buttonView}>
        <Button title={!editable?'Update':"Add"} color="white" onPress={onPressAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {paddingHorizontal: 10},
  inputStyle: {
    borderWidth: 1,
    height: 40,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    width:'100%'
  },
  buttonView: {
    width: 80,
    backgroundColor: 'grey',
    borderRadius: 6,
    alignSelf: 'center',
  },
});

export default Form;
