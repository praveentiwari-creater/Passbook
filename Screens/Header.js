import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const  Header=(props)=>{
  return(
    <View style={{backgroundColor:'#339966',height:50,width:'100%',justifyContent: "flex-start"}}>
        <View style={styles.header2}>
            <TouchableOpacity onPress={props.onPress1}>
        <Image source={props.source} style={{height:32,width:32,marginTop:7}}/>
        </TouchableOpacity>
        </View>

<View style={styles.text}>
  <TouchableOpacity onPress={props.onPress2}>
    <Text style={{fontSize:25,color:'white'}}>
        {props.showbutton}
    </Text>
    </TouchableOpacity>
</View>

<View style={styles.text}>
    <Text style={{fontSize:25,color:'white'}}>
        {props.showCustomerName}
    </Text>
</View>

        <View style={styles.header1}>
      <TouchableOpacity onPress={props.onPress}>
      <Text style={{fontSize:25,textAlign:'center',color:'white'}}>
      Add
      </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
export default Header;

const styles=StyleSheet.create({
    header1:{
        backgroundColor:'#800080',
        width:60,height:38,
        position: 'absolute',
        top:6,
        right:10,
        borderColor:'red',
        borderRadius:5,
        borderWidth:1
    },
    text:{
      position:'absolute',
      left:130,
      bottom:10
    }
    // header2:{
    //     backgroundColor:'#800080',
    //     width:60,height:38,
    //     position: 'absolute',
    //     top:6,
    //     left:10,
    //     borderColor:'red',
    //     borderRadius:5,
    //     borderWidth:1
    // }
})