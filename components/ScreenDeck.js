import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListDeck from './ListDeck';

class ScreenDeck extends Component {
  componentDidMount() {
    this.props.getAllDecks();
  }

 render() {
    return (
      <FlatList 
        style={styles.deckList}
        data={Object.values(this.props.decks)}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => (
          <ListDeck 
            deck={item} 
            navigateToDeck={this.navigateToDeck} 
          />
        )}
      />
    );
  }
}

export default ScreenDeck; 