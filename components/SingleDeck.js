import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';
import BtDefault from './BtDefault';

class SingleScreen extends Component {
  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      deck: this.props.deck.title
    })
  }
  
  render() {
    const deck = this.props.deck;
    return (
      <View style={styles.deckCard}>
        <View>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.cardNumber}>This deck has {deck.questions.length} cards</Text>
        </View>
        <View>
          <BtDefault text='Start Quiz' func={() => this.navigate('Quiz')}/>
          <BtDefault text='Add Card' func={() => this.navigate('AddCard')}/>
        </View>
      </View>
    );
  }
}


export default SingleScreen;