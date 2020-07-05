import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image} from 'react-native';

const LandingScreen = ({navigation}) => {
    const URL = 'https://headsup-api.herokuapp.com/decks'
    const [decks, setDecks] = useState([])
    const [loading, setLoading ] = useState(true)
    
    useEffect(()=>{
      fetch(URL)
        .then((response) => response.json())
        .then( decks  => {
            setDecks(decks)
            setLoading(false)
        })
      .catch( error => {
        console.error(error)
      })
  
    }, [])
  
    if (loading){
        return (
          <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image 
                     source={require('../../assets/codecrown.png')}
                     style={{width: 400, height: 400}}
                />
            </View>
          </View>
        )
      } else { 
        return navigation.navigate('Home', {decks:decks})
    }
  };
  
export default LandingScreen

const color = {
    green: 'hsla(161, 92%, 15%, 1)',
    lightGreen: 'hsla(63, 28%, 72%, 1)',
    yellow: 'hsla(49, 90%, 56%, 1)',
    orange: 'hsla(16, 88%, 57%, 1)',
    red: 'hsla(5, 62%, 41%, 1)',
    white: '#FFF'
}

const { green, lightGreen, yellow, orange, red, white  } = color

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    cardContainer: {
        flex: 1,
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        backgroundColor: red,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color:'blue'
    }
});