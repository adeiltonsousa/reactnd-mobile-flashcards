import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { addCardToDeck } from '../utils/api';
import { red } from '../utils/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewCard } from '../actions';
import BtDefault from './BtDefault';

class Card extends PureComponent {
  state = { 
    question: 'Question',
    answer: 'Answer',
    questionTooShort: false,
    answerTooShort: false
  };

  createCard = () => {
    if(this.state.question.length > 6 && this.state.answer.length > 1) {
      const cardObj = {
        question: this.state.question,
        answer: this.state.answer
      }
      const deckTitle = this.props.navigation.state.params.deck;
      addCardToDeck(deckTitle, cardObj);
      this.props.addNewCard(deckTitle, cardObj);
      this.setState({ 
        question: '',
        answer: ''
      });
      this.props.navigation.navigate('IndividualDeck', { deck: deckTitle });
    } else {
      if(this.state.question.length <= 6) {
        this.setState({ questionTooShort: true })
      }
      if(this.state.answer.length <= 1) {
        this.setState({ answerTooShort: true })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.questionTooShort && <Text style={styles.error}>The question is too short!</Text>}
        <TextInput
          underlineColorAndroid='#2962ff'
          style={styles.input}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          onFocus={() => this.setState({ question: '', questionTooShort: false })}
        />
        {this.state.answerTooShort && <Text style={styles.error}>The answer is too short!</Text>}
        <TextInput
          underlineColorAndroid='#2962ff'
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          onFocus={() => this.setState({ answer: '', answerTooShort: false })}
        />
        <View style={styles.BtDefaultWrapper}>
          <BtDefault text='Create Card' func={this.createCard}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  error: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: red
  },
  input: {
    padding: 15,
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16
  },
  BtDefaultWrapper: {
    alignItems: "center"
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewCard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Card);