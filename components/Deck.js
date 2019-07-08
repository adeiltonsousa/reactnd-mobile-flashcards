import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { connect } from 'react-redux';

class Deck extends Component {
  state = { 
    title: 'Title',
    tooShort: false
  };

  createDeck = () => {
    if(this.state.title.length > 3) {
      saveDeckTitle(this.state.title);
      const deckObj = {
        [this.state.title]: {
          title: this.state.title,
          questions: []
        }
      };
      this.props.addNewDeck(deckObj);
      this.props.navigation.navigate('IndividualDeck', { deck: this.state.title });
      this.setState({ title: '' });
    } else {
      this.setState({ tooShort: true })
    }
  }

  render() {
    return (
      <View>
        {this.state.tooShort && <Text style={styles.error}>The deck name is too short!</Text>}
        <TextInput
          underlineColorAndroid='#2962ff'
          style={styles.titleInput}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          onFocus={() => this.setState({ title: '', tooShort: false })}
        />
        <View style={styles.BtDefaultWrapper}>
          <BtDefault text='Create Deck' func={this.createDeck}/>
        </View>
      </View>
    );
  }
}


export default connect(null, mapDispatchToProps)(Deck);