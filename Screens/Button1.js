import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Button1 = (props) => {
  return (

    <View style={styles.header}>
    
      <TouchableOpacity onPress={props.onPress1}>
        <Text style={{ fontSize: 25, textAlign: 'center', color: 'white' }}>
          Add
      </Text>
      </TouchableOpacity>
    
    </View>

  )
}
export default Button1;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#800080',
    width: 160, height: 38,
    position: 'absolute',
    bottom: 130,
    right: 120,
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 1,

  }
})