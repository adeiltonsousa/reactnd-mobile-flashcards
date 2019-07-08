import React, { PureComponent } from 'react';
import { 
  View, 
  Text, 
  TouchableWithoutFeedback,
  AsyncStorage, 
  StyleSheet } from 'react-native';
import { notifications } from 'expo';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { gray, blueDark, blueLight } from '../utils/colors';
import { setLocalNotification, clearLocalNotification, NOTIFICATION_KEY } from '../utils/notice';
import BtDefault from './BtDefault';

const NoCards = () => (
  <View style={styles.noCards}>
    <Text style={styles.noCardsText}>This deck has no question cards.</Text>
  </View>
);

const ResultScreen = (props) => (
  <View style={styles.resultCard}>
    <Text style={styles.resultCardText}>Total questions answered: {props.totalAnswered}</Text>
    <Text style={styles.resultCardText}>Correct Answers: {props.correct}</Text>
    <BtDefault text='Restart' func={props.restart} />
    <BtDefault text='Go Back' func={props.goBack} />
  </View>
);

const ShowQuestionOrAnswer = (props) => (
  <TouchableWithoutFeedback onPress={props.toggle}>
    <View>
      {
        props.current == 'question'
        ? <Text>Show Answer</Text>
        : <Text>Show Question</Text>
      }
    </View>
  </TouchableWithoutFeedback>
)

class Quiz extends PureComponent {
  state = { 
    currentQuestion: 0,
    correctAnswers: 0,
    show: 'question',
    showResults: false
  };

  showQuestionOrAnswer = () => {
    const show = (this.state.show) === 'question'
      ? 'answer'
      : 'question'
  
    this.setState({ show });
  }

  userAnswered(answer) {
    if(answer === 'correct') {
      this.setState({ correctAnswers: this.state.correctAnswers + 1 });
    }
    
    if(this.state.currentQuestion === this.props.questions.length -1) {
      this.setState({ showResults: true });
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      correctAnswers: 0,
      show: 'question',
      showResults: false
    });

    clearLocalNotification()
      .then(setLocalNotification)   
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() { 
    if(this.props.questions.length === 0) {
      return <NoCards/>
    }

    if(this.state.showResults) {
      return (
        <ResultScreen 
          totalAnswered={this.props.questions.length}
          correct={this.state.correctAnswers}
          restart={this.restartQuiz}
          goBack={this.goBack}
        />
      );
    }
    
    const showingCard = this.props.questions[this.state.currentQuestion];

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.quizProgress}>
          <Text>Card {this.state.currentQuestion + 1}/{this.props.questions.length}</Text>
        </View>

        <View style={styles.quizCard}>
          {
            this.state.show == 'question'
            ? <Text style={styles.questionText}>{showingCard.question}</Text>
            : <Text style={styles.answerText}>{showingCard.answer}</Text>
          }

          <ShowQuestionOrAnswer
            toggle={this.showQuestionOrAnswer}
            current={this.state.show}
          />
          <View>
            <BtDefault text='Correct' func={() => this.userAnswered('correct')}/>
            <BtDefault text='Incorrect' func={() => this.userAnswered('incorrect')}/>
          </View>
        </View>
      </View>
    );
  }
}

export default Quiz;