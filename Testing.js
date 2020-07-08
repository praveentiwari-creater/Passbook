import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity,Alert } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header';
function Details_Page({ route, navigation }) {
  const [show, setShow] = useState(false);
  const [disc, setDisc] = useState(null);
  const [amount, setAmount] = useState(null);
  const [alldate, setAllDate] = useState(null);
  // const [date, setDate] = useState(new Date().getDate());
  const [tableHead, setTableHead] = useState(['DISC','DEBIT', 'CREDIT', 'DATE']);
  const [tableData, setTableData] = useState([[null, null, null,null]]);

  const { parametor } = route.params;

  press_modal = () => {
    setShow(true)
  }

  // const SumValue = amount && amount.reduce((a, v) => a + v, 0)

  const DEBIT = async() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
   var dated=date + '-' + month + '-' + year;

  //  var firstPair = ["ddescription", disc]
  //  var secondPair = ["aamount", amount]
  //  var thirddPair = ["ddated", dated]
  //  try {
  //    await AsyncStorage.multiSet([firstPair, secondPair,thirddPair])
  //  } catch(e) {
  //   console.log('error details page',e)
  //  }
  //  console.log("Done.");
    // var date = { currentTime: (new Date()).toLocaleString() }
    setTableData([[disc,amount, null,dated ]])
      
  }
  const CREDIT =async () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var dated=date + '-' + month + '-' + year;

  //   var firstPair = ["ddescription", disc]
  //  var secondPair = ["aamount", amount]
  //  var thirddPair = ["ddated", dated]
  //  try {
  //    await AsyncStorage.multiSet([firstPair, secondPair,thirddPair])
  //  } catch(e) {
  //   console.log('error details page',e)
  //  }
  //  console.log("Done.");
    // var date = { currentTime: (new Date()).toLocaleString() }/////date.toLocaleString()
    setTableData([[disc,null, amount,dated]])
   
  }

//  useEffect(async()=>{
//   try {
//     const value1 = await AsyncStorage.getItem('ddescription');
//     const value2 = await AsyncStorage.getItem('aamount');
//     const value3 = await AsyncStorage.getItem('ddated');
//     if(value !== null) {
//       setTableData([[null, disc +"-"+ amount,dated]])
//     }
//   } catch(e) {
//     // error reading value
//   }
//  })

  return (
    <View >
      <View>
        <Header
          onPress={press_modal}
          source={require('../ICONS/back.png')}
          onPress1={() => navigation.navigate("Home")}

          showCustomerName={parametor}
        />
      </View>

      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: 'blue' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text1} />
          <Rows data={tableData} style={styles.head} textStyle={styles.text} />
        </Table>
      </View>


      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }} >

          <View style={styles.modal}>
            <View>
              <Text style={{ fontSize: 18, textAlign: 'center', color: '#b300b3' }}>
                Description</Text>
              <TextInput
                placeholder="Text Here Something"
                style={styles.textinput}
                onChangeText={disc => setDisc(disc)}
              />
            </View>

            <View style={{ marginTop: 50 }}>
              <Text style={{ fontSize: 18, textAlign: 'center', color: '#b300b3' }}>
                Amount</Text>
              <TextInput
                placeholder="Text Here Something"
                style={styles.textinput1}
                onChangeText={amount => setAmount(amount)}
              />
            </View>

            <View style={{ marginTop: 70, flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{ width: 70, height: 40, backgroundColor: 'grey', borderRadius: 10, marginLeft: 50 }}>
                <TouchableOpacity onPress={() => DEBIT()}>
                  <Text style={{ fontSize: 20, color: "white", textAlign: 'center', marginTop: 5 }}>Debit</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: 70, height: 40, backgroundColor: 'grey', borderRadius: 10, marginRight: 50 }}>
                <TouchableOpacity onPress={() => CREDIT()}>
                  <Text style={{ fontSize: 20, color: "white", textAlign: 'center', marginTop: 5 }}>Credit</Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* , setText1(text)   ,   */}
            <View style={styles.button}>
              <TouchableOpacity onPress={() => setShow(false)}>
                <Text style={{ fontSize: 22, textAlign: 'center', color: 'white' }}>
                  Done </Text>
              </TouchableOpacity>

            </View>

          </View>
        </Modal>
      </View>

    </View>
  )
}
export default Details_Page;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#800080',
    width: 60, height: 38,
    position: 'absolute',
    top: 6,
    right: 10,
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 1
  },
  modal: {
    position: 'absolute',
    top: 100,
    left: 20,

    width: '90%',
    height: 300,
    backgroundColor: 'pink',
    borderRadius: 10
  },
  button: {
    backgroundColor: '#ff80d5',
    width: 160, height: 38,
    position: 'absolute',
    bottom: 30,
    right: 100,
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
  },
  textinput: {
    backgroundColor: 'white',
    width: 300,
    height: 45,
    position: 'absolute',
    left: 35,
    top: 24
  },
  textinput1: {
    backgroundColor: 'white',
    width: 300,
    height: 45,
    position: 'absolute',
    left: 35,
    top: 24
  },
  container: { padding: 10, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 40, width: 390, backgroundColor: '#f1f8ff' },
  head: { height: 40, width: 390, backgroundColor: 'white' },
  text: { margin: 6, fontSize: 16 },
  text1: { margin: 6, fontSize: 23, color: 'blue' }
})