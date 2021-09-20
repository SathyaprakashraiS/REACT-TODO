import { Formik } from 'formik';
import React, {useEffect,useReducer,useState} from 'react';
import { TextInput,Image,StyleSheet, Text, View,Alert,Button,ScrollView } from 'react-native';

export default function ReviewForm() {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        <Formik
        initialValues={{name:'',status:''}}
        onSubmit={(values) => {
            console.log(values)
        }}
        >
            {(props) => (
                <View>
                    <TextInput
                        placeholder='name'
                        onChangeText={props.handleChange('name')}
                        value={props.values.name}    
                    />
                    <TextInput
                        multiline
                        placeholder='status'
                        onChangeText={props.handleChange('status')}
                        value={props.values.status}    
                    />
                    <Button title="submit" color='red' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
        </ScrollView>
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
