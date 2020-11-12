/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class App extends Component {
  render() {
    return (



      <View style={styles.contenidor}>
        
        <View style={styles.top}>
        <Text style={styles.texto3}>   |||                           👤 </Text>
      </View>
       
          <View style={styles.seccio1}>
              <View style={styles.seccio4}>
              <Text style={styles.texto}>BBVA</Text>
              </View>
             <View style={styles.seccio5}>
                <Text style={styles.texto2}>Valencia VS Madrid ----------- 2x1</Text>
             </View>
             <View style={styles.seccio6}>
                <Text style={styles.texto2}>Valencia VS Madrid ----------- 2x1</Text>
             </View>
          </View>
          
          <View style={styles.seccio2}>
            <View style={styles.seccio4}>
                <Text style={styles.texto}>ADELANTE</Text>
              </View>
             <View style={styles.seccio5}>
                <Text style={styles.texto2}>Valencia VS Madrid ----------- 2x1</Text>
             </View>
             <View style={styles.seccio6}>
                <Text style={styles.texto2}>Valencia VS Madrid ----------- 2x1</Text>
             </View>
          </View>
          
      </View>

    );
  }
};

const styles = StyleSheet.create({

  contenidor: {

    backgroundColor:'#19656F',
    flex: 1,
    flexDirection: 'column',
    borderColor:'#19656F',
    borderWidth:1,
  },
 creditInput: 
    { backgroundColor: "#3f51b5",
     color: "#ffffff", 

 }, 
  
  top: {
    flex: 1,
    backgroundColor:'#03A6A6',
    borderColor:'#03A6A6',
    borderWidth:5,
  },
  seccio1: {
    color:'#19656F',
    flex:3,
    backgroundColor:'#80F2E7',
    flexDirection: 'column',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 40,
    marginBottom:40 ,
    marginLeft:40 ,
    //padding: 12,
    textAlign: 'right',
    
  },
  seccio2: {
    backgroundColor:'#80F2E7',
    flex:3,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 0,
    marginBottom:40 ,
    marginLeft:40 ,
    textAlign: 'center',
  },
   texto: {
    fontSize: 25,
    color:'white',

    textAlign: 'center',
  },
  texto3: {
    fontSize: 40,
    color:'#373737',

    textAlign: 'center',
  },
  texto2: {
    fontSize: 15,
    //color:'white',

    textAlign: 'center',
  },
  seccio4: {
    backgroundColor:'#373737',
    flex:1,
    fontSize: 15,
    color:'white',
    fontWeight: '200',
    margin: 4,
    padding: 12,
    textAlign: 'center',
  },
  seccio5: {
    flex:1,
    borderColor:'black',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  },
  seccio6: {
    flex:1,
    borderColor:'black',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  }, 
  seccio3: {
    flex:1,
    borderColor:'black',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 40,
    padding: 12,
    textAlign: 'left',
  },
});

export default App;
