import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { addCardToDeck } from '../utils/api';
import { red } from '../utils/colors';
import { connect } from 'react-redux';
import Button from './Button';

class AddCardScreen extends PureComponent {
  state = { 
    question: 'Question',
    answer: 'Answer',
  };

  createCard = () => {
    if(this.state.question.length > 6 && this.state.answer.length > 1) {
      const cardObj = {
        question: this.state.question,
        answer: this.state.answer
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
        <View style={styles.buttonWrapper}>
          <Button text='Create Card' func={this.createCard}/>
        </View>
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddCardScreen);