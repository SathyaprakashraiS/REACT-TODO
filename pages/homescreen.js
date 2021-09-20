import { NavigationContainer } from '@react-navigation/native';
import { Formik } from 'formik';
import React, {useEffect,useReducer,useState} from 'react';
import { TextInput,Image,StyleSheet, Text, View,Alert,Button } from 'react-native';

//export default function Home() {
const Home =({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Hello</Text>
        <Button title='foRms' onPress={() => navigation.navigate("forms")}/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
