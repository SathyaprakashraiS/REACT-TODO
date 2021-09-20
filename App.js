import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useReducer,useState} from 'react';
import { TextInput,Image,StyleSheet, Text, View,Alert,Button } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import ReviewForm from './pages/forms';
import Home from './pages/homescreen';
//import Navigator from './routes/homestack';

import {enableScreens} from "react-native-screens";
enableScreens();
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

var firebaseConfig = {
  apiKey: "AIzaSyDWc6Dr8fAnJ_DLO318Pg1C2QPTsydZWFg",
  authDomain: "to-do-ef53f.firebaseapp.com",
  databaseURL: "https://to-do-ef53f-default-rtdb.firebaseio.com",
  projectId: "to-do-ef53f",
  storageBucket: "to-do-ef53f.appspot.com",
  messagingSenderId: "710018625915",
  appId: "1:710018625915:web:5c3d427c6c6cb090e28dde",
  measurementId: "G-YHX87DK45E"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
const testlist=db.collection('users').get()
let track=[]
const data=[]

export default function App() {
  const [value,setvalue]=React.useState("erukumo");
  createfun=(valuef) =>
  {
    console.log("ATLEAST THIS IS WORKING",valuef)
    db
  .collection('users')
  .add({
    name: valuef,
  })
  .then(() => {
    console.log('User added!');
  });
  }
  const [name,setname] = useState([])
  list = []//user details list
  imagelist=[]//images list
React.useEffect(() => {
  db
  .collection('users')
  .get()
  .then((snapshot) =>
  {
    snapshot.docs.forEach(doc =>
    {
      console.log(doc.data())
      list.push({
        id:doc.id,
         ...doc.data()
      })
    }
  )
  setname(list);
  })
}, []);

//const lol=firebase.storage();
//console.log("LOL :",lol)

/*
let imageRef = firebase.storage().ref();
imageRef
  .getDownloadURL()
  .then((url) => {
    //from url you can fetched the uploaded image easily
    this.setState({profileImageUrl: url});
  })
console.log("SEE THIS :",profileImageUrl)
*/

onChooseImagePress=async () => {
  let result =await ImagePicker.launchCameraAsync();
  //let result=await ImagePicker.launchImageLibraryAsync();

  if (!result.cancelled)
  {
    console.log("its working till here with result value as ",result)
    console.log("its working till here with resulturi value as ",result.uri)
    this.uploadImage(result.uri,"testimage")
    .then(() => {
      Alert.alert("Success");
    })
    .catch(()=>{
      Alert.alert("error");
    });
  }
}
uploadImage = async (uri,imageNametk) => {
  const response=await fetch(uri);
  const blob =await response.blob();
  console.log("GOT HERE")
  var ref = firebase.storage().ref().child(imageNametk);
  console.log("SEE HERE1")
  //const urlq = await ref.getDownloadURL();//this outputs the downloiad url of current uploaded image
  //console.log("REFE ",urlq)
  //return ref.put(blob);
  const submited=await ref.put(blob);
  const dwn=await submited.ref.getDownloadURL();
  console.log("SEE HERE")
  console.log("ITHU THAN LINK: ",dwn)
  return dwn;
  
/*const file = fetch('...');
const storageRef = firebase.storage().ref();
const ref = storageRef.child('images');
const snapshot = await ref.put(file);*/
}

const Stack=createNativeStackNavigator()

  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="forms" component={ReviewForm} />
      </Stack.Navigator>
    </NavigationContainer>
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <Text>test46</Text>
    {name.map((item, index) => {
        return (
          <View key={index}>
            <Text style={styles.itemtext}>{item.name}</Text>
            <Text>{item.id}</Text>
          </View>
        );
      })}
    <StatusBar style="auto" />
    <Button title="Choose pic" onPress={ this.onChooseImagePress } />
    <TextInput 
    style={styles.input}
    placeholder='new username'
    onChangeText={(value) => {setvalue(value) }}
    />
    <Button title="click here" onPress={() => {
      createfun(value)
    }}/>
    <Text>{value}</Text>
    <ReviewForm />
  </View>
  */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
});
