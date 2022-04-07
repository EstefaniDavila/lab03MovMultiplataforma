import React, { Component } from 'react';
import {Text,View, StyleSheet} from 'react-native';
import AgeValidator from './components/ageValidator/ageValidator';
import MyList from './components/myList/myList';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Ingrese su edad</Text>
        </View>
          <AgeValidator/>
          <MyList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:10,
  },

  text: {
    alignItems: 'center',
    padding: 10,
  },
});

