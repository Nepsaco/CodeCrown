import React, { useState, useEffect } from 'react';
import {View, Image, StatusBar} from 'react-native';
import { styles }  from '../styles/style';

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

  return (loading 
    ? <View style={styles.background}>
      <StatusBar hidden={true} />
          <View style={styles.cardContainer}>
          <Image 
            source={require('../../assets/codecrown.png')}
            style={{width: 400, height: 400}}
          />
          </View>
        </View>
    : navigation.navigate('Home', {decks:decks})
  )

};

export default LandingScreen