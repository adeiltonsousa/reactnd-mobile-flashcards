import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class ListDeck extends Component {
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.navigateToDeck(this.props.deck.title)}
            >
                <View style={styles.deckItem}>
                    <Text style={styles.deckTitle}>{this.props.deck.title}</Text>
                    <Text style={styles.cardNumber}>Cards: {this.props.deck.questions.length}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


export default ListDeck;