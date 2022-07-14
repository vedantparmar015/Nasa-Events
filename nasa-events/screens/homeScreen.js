import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Home extends Component {

  goToWebsite = ()=>{this.props.navigation.navigate('https://www.nasa.gov/')}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Next Event:</Text>
        <Text style={styles.text2}>Space Launch</Text>
        <Text style={styles.text2}>10:00AM</Text>
        <TouchableOpacity style={styles.button}
          onPress = {this.goToWebsite}
          
        >
          <Text style={styles.buttonText}>Go To The Website</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
    //padding: 8,
  },
  text: {
    fontSize: 24,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    alignSelf: 'center',
  },
  text2: {
    fontSize: 20,
    alignSelf: 'center',
    padding: 30,
  },
  button: {
    width: 100,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'cyan',
    borderRadius: 40,
  },
  buttonText: {
    textAlign: 'center',
  },
});
