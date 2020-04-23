import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet } from 'react-native'
import { ScreenOrientation } from 'expo'

export default class Countdown extends Component {
    state = {
        countdownAnimation: new Animated.Value(450),
    }

    componentDidMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
        this.props.startTimer()
        this.startAnimation()
    }

    startAnimation = () => {
        Animated.loop(
            Animated.timing(this.state.countdownAnimation, {
                toValue: 200,
                duration: 1000,
            }), { iterations: 3 }
        ).start()
    }

    render() {
        const animatedStyle = {
            fontSize: this.state.countdownAnimation
        }

        return (
            <View style={styles.cardContainer}>
                <Animated.Text style={[styles.countdownText, animatedStyle]}>
                    {this.props.remainingTime.toString().slice(-1)}
                </Animated.Text>
            </View>
        )
    }
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

    cardContainer: {
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

    countdownText: {
        fontWeight: 'bold',
        color: white,
    },

})
