import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { saveDeckTitle } from '../utils/api';
import { red } from '../utils/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import BtDefault from './BtDefault';

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
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
  },
  error: {
    textAlign: 'center',
    color: red
  },
  titleInput: {
    padding: 15,
    marginTop: 40,
    marginBottom: 5,
    fontSize: 16
  },
  BtDefaultWrapper: {
    alignItems: "center"
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewDeck }, dispatch);
}

export default connect(null, mapDispatchToProps)(Deck);