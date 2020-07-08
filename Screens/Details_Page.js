import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header';

function Details_Page({ route, navigation }) {

  const [show, setShow] = useState(false);
  const [disc, setDisc] = useState([]);
  const [amount, setAmount] = useState([]);
  const [disc1, setDisc1] = useState([]);
  const [amount1, setAmount1] = useState([]);
  const [alldate1, setAllDate1] = useState([]);
  const [amount2, setAmount2] = useState([]);
  const [totalDebid, setToatalDebid] = useState([]);
  const [totalCredit, setTotalCredit] = useState([]);

  const { parametor } = route.params;

  press_modal = () => {
    setShow(true)
  }

  DEBIT = async () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var dated = date + '-' + month + '-' + year;

    disc1.push(disc);
    amount1.push(amount);
    alldate1.push(dated);
    amount2.push(0);

    try {
      if (amount1 != null) {
        await AsyncStorage.setItem('discAdd1', JSON.stringify(disc1));
        await AsyncStorage.setItem('amountAdd1', JSON.stringify(amount1));
        await AsyncStorage.setItem('amountAdd2', JSON.stringify(amount2));
        await AsyncStorage.setItem('dateAdd1', JSON.stringify(alldate1));
      }
      else {
        alert('null value can not acceptable')
      }
    } catch (e) {
      console.log('ErrorADD===>', e)
    }
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
    // setTableData([[disc,amount, null,dated ]])

  }
  CREDIT = async () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var dated = date + '-' + month + '-' + year;

    disc1.push(disc);
    amount2.push(amount);
    alldate1.push(dated);
    amount1.push(0);

    try {
      if (amount2 != null) {
        await AsyncStorage.setItem('discAdd1', JSON.stringify(disc1));
        await AsyncStorage.setItem('amountAdd1', JSON.stringify(amount1));
        await AsyncStorage.setItem('amountAdd2', JSON.stringify(amount2));
        await AsyncStorage.setItem('dateAdd1', JSON.stringify(alldate1));
      }
      else {
        alert('null value can not acceptable')
      }
    } catch (e) {
      console.log('ErrorADD===>', e)
    }
  }

  useEffect(() => { setvalue1() }, [])

  setvalue1 = async () => {
    try {
      const value1 = await AsyncStorage.getItem('discAdd1');
      let discAdd1 = await JSON.parse(value1) || [];
      const value2 = await AsyncStorage.getItem('amountAdd1');
      let amountAdd1 = await JSON.parse(value2) || [];
      const value3 = await AsyncStorage.getItem('dateAdd1');
      let dateAdd1 = await JSON.parse(value3) || [];
      const value4 = await AsyncStorage.getItem('amountAdd2');
      let amountAdd2 = await JSON.parse(value4) || [];

      console.log('disss===>', discAdd1);
      console.log('amount===>', amountAdd1);
      console.log('daate===>', dateAdd1);
      console.log('amount2===>', amountAdd2);

      setDisc1(discAdd1)
      setAmount1(amountAdd1)
      setAllDate1(dateAdd1)
      setAmount2(amountAdd2)

      console.log("praveen",disc1);

      let c = 0;
      for (let i = 0; i < amountAdd1.length; i++) {
        c += JSON.parse(amountAdd1[i]);
        // JSON.parse( amount1[i]);
      }
      console.log('sum =>', c);
      setToatalDebid(c);

      let d = 0;
      for (let j = 0; j < amountAdd2.length; j++) {
        d += JSON.parse(amountAdd2[j]);
        // JSON.parse( amount2[j]);
      }
      setTotalCredit(d);
      console.log('sum2 =>', d);

    } catch (e) {
      console.log('error===>', e)
    }
  }

  function Item1({ title1 }) {
    return (
      <View>
        <Text style={{
          fontSize: 16, color: '#3366ff', fontWeight: 'bold',
          height: 40, marginLeft: 15, marginBottom: 5
        }}>{title1}</Text>
      </View>
    );
  }

  function Item2({ title2 }) {
    return (
      <View>
        <Text style={{
          fontSize: 16, color: '#3366ff', fontWeight: 'bold',
          height: 40, marginLeft: 15, marginBottom: 5
        }}>{title2}</Text>
      </View>
    );
  }

  function Item3({ title3 }) {
    return (
      <View>
        <Text style={{
          fontSize: 16, color: '#3366ff', fontWeight: 'bold',
          height: 40, marginLeft: 15, marginBottom: 5
        }}>{title3}</Text>
      </View>
    );
  }

  function Item4({ title4 }) {
    return (
      <View>
        <Text style={{
          fontSize: 16, color: '#3366ff', fontWeight: 'bold',
          height: 40, marginLeft: 15, marginBottom: 5
        }}>{title4}</Text>
      </View>
    );
  }

  // fun=()=>{
  //   setDisc1([])
  //   setAmount1([])
  //   setAllDate1([])
  //   setDisc2([])
  //   setAmount2( [])
  //   setAllDate2( [])
  // }

  // clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear()
  //   } catch(e) {
  //     // clear error
  //   }

  //   console.log('Done.')
  // }

  return (
    <View >
      <View>
        <Header
          onPress={press_modal}
          source={require('../ICONS/back.png')}
          onPress1={() => [navigation.navigate("Home")]}
          showCustomerName={parametor}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00' }}>
          <Text style={{ fontSize: 22, marginBottom: 10, color: 'white' }}>DISCPN</Text>
        </View>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00' }}>
          <Text style={{ fontSize: 22, marginBottom: 10, color: 'white' }}>CREDIT</Text>
        </View>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00' }}>
          <Text style={{ fontSize: 22, marginBottom: 10, color: 'white' }}>DEBIT</Text>
        </View>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00' }}>
          <Text style={{ fontSize: 22, marginBottom: 10, color: 'white' }}>DATE</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 104, backgroundColor: '#b3ffff', marginTop: 10 }}>
          <FlatList
            data={disc1}
            renderItem={({ item }) => <Item1 title1={item} />}
            keyExtractor={item => item.index}
          />
        </View>

        <View style={{ width: 104, backgroundColor: '#b3ffff', marginTop: 10 }}>
          <FlatList
            data={amount2}
            renderItem={({ item }) => <Item4 title4={item} />}
            keyExtractor={item => item.index}
          />
        </View>

        <View style={{ width: 104, backgroundColor: '#b3ffff', marginTop: 10 }}>
          <FlatList
            data={amount1}
            renderItem={({ item }) => <Item2 title2={item} />}
            keyExtractor={item => item.index}
          />
        </View>
        <View style={{ width: 104, backgroundColor: '#b3ffff', marginTop: 10 }}>
          <FlatList
            data={alldate1}
            renderItem={({ item }) => <Item3 title3={item} />}
            keyExtractor={item => item.index}
          />
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00', marginTop: 10 }}>
          <Text style={{ fontSize: 22, color: 'white', marginTop: 5, }}>Total-</Text>
        </View>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00', marginTop: 10 }}>
          <Text style={{ fontSize: 18, color: 'white', marginTop: 5, marginLeft: 10 }}>{totalCredit}</Text>
        </View>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00', marginTop: 10 }}>
          <Text style={{ fontSize: 18, color: 'white', marginTop: 5, marginLeft: 10 }}>{totalDebid}</Text>
        </View>
        <View style={{ width: 104, height: 40, backgroundColor: '#994d00', marginTop: 10 }}>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 150, height: 40, backgroundColor: '#994d00', marginTop: 10, marginLeft: 106 }}>
          <Text style={{ fontSize: 22, color: 'white', marginTop: 5, }}>Total-Amount=</Text>
        </View>
        <View style={{ width: 150, height: 40, backgroundColor: '#994d00', marginTop: 10 }}>
          <Text style={{ fontSize: 22, color: 'white', marginTop: 5, marginLeft: 10 }}>{totalCredit - totalDebid}</Text>
        </View>
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
              <TouchableOpacity onPress={() => CREDIT()}>
                  <Text style={{ fontSize: 20, color: "white", textAlign: 'center', marginTop: 5 }}>Credit</Text>
                </TouchableOpacity>
               
              </View>

              <View style={{ width: 70, height: 40, backgroundColor: 'grey', borderRadius: 10, marginRight: 50 }}>
              <TouchableOpacity onPress={() => DEBIT()}>
                  <Text style={{ fontSize: 20, color: "white", textAlign: 'center', marginTop: 5 }}>Debit</Text>
                </TouchableOpacity>
              </View>

            </View>

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