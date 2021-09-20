import { Formik } from 'formik';
import React, {useEffect,useReducer,useState} from 'react';
import { TextInput,Image,StyleSheet, Text, View,Alert,Button } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <Text>Hello</Text>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
