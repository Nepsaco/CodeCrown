import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Deck = (props) => {
    return <View style={styles.container}>
        <Text style={styles.text}>{props.deck.name}</Text>
        <Button onPress={() => props.startGame(props.deck)} title='Start Game'/>

    </View>
}

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
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        backgroundColor: red,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
        marginRight: 40,
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: white,
    },

})

export default Deck