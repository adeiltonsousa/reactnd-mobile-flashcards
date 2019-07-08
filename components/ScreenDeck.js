import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import DeckListItem from './DeckListItem';

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
          <DeckListItem 
            deck={item} 
            navigateToDeck={this.navigateToDeck} 
          />
        )}
      />
    );
  }
}

export default ScreenDeck; 