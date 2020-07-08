import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, FlatList ,Alert} from 'react-native';
import Header from './Header';
import Button1 from './Button1';
import Details_Page from './Details_Page';
import AsyncStorage from '@react-native-community/async-storage';

function Home({ navigation }) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState([]);
    const [text1, setText1] = useState([]);
    const [text2, setText2] = useState([]);
    press_modal = () => {
        setShow(true)
    }
    //     getdata = () => {
    // // for(let i=0; i<text.length;i+=1){
    //          text1.push(text);

    // // }
    //         console.log('dataa', text1)
    //     }
    storeData = async () => {
       
        text1.push(text)
        console.log('dataaaaaaaaaaaaaa=>>>>>>>', text1)
        try {
            if (text1 != null) {
                await AsyncStorage.setItem('CustomerName1', JSON.stringify(text1));
            }
            else {
                alert('null value can not acceptable')
            }
        } catch (e) {
            console.log('Error===>', e)
        }
    
    }
    useEffect(() => setvalue(), [])

    setvalue = async () => {

        try {
            const value = await AsyncStorage.getItem('CustomerName1');
            let CustomerName1 = await JSON.parse(value);// || [];
            console.log('testing', CustomerName1)
            if (value != null) {
                setText1(CustomerName1)
                console.log('testingstate', text1)
            }
        } catch (e) {
            console.log('Error2===>', e)
        }
       
    }

//     actionValue=(value)=>{
// console.log('value===>',value)
//     }

    function Item({ title }) {
        console.log('titlepppppppppp==>',title)
        return (
           
            <View>
                <TouchableOpacity onPress={() =>{ navigation.navigate("Details_Page", { parametor: title })}} >
                    <View style={{
                        marginLeft: 5, marginRight: 5, marginTop: 10, backgroundColor: '#b3ffff', borderWidth: 0.5,
                        borderColor: '#3366ff'
                    }}>
                        <Text style={{
                            fontSize: 30, color: '#3366ff', fontWeight: 'bold',
                            height: 40, marginLeft: 15, marginBottom: 5
                        }}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={{}}>
            <Header onPress={press_modal}
            //  showbutton={"Customer"}
            //     onPress2={() => getData()}
            />
            <FlatList
                data={text1}
                renderItem={({ item }) => <Item title={item} />}
                keyExtractor={item => item.index}
            />
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
                            <Text style={{ fontSize: 18, textAlign: 'center', color: '#b300b3' }}>Customer Name</Text>
                            <TextInput
                                placeholder="Text Here Something"
                                style={styles.textinput}
                                onChangeText={text => setText(text) }
                            />
                        </View>
                        {/* , setText1(text)   ,   */}
                        {/* storeData(), */}
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { setShow(false), storeData() }}>
                                <Text style={{ fontSize: 22, textAlign: 'center', color: 'white' }}>
                                    save </Text>
                            </TouchableOpacity>
                        </View >

                        <View style={styles.cancel}>
                            <TouchableOpacity onPress={() => setShow(false)}>
                                <Text style={{ color: 'white' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
            </View>
        </View>
    )
}
export default Home;
const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        top: 150,
        left: 20,
        width: '90%',
        height: 200,
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
        top: 40
    },
    cancel: {
        position: 'absolute',
        right: 20, bottom: 30,
        backgroundColor: '#ff80d5'
    }
})