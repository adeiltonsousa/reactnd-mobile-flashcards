import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { blue, blueHighlight, white } from '../utils/colors';
import ScreenDeck from './ScreenDeck';
import Deck from './Deck';
import Card from './Card';
import SingleDeck from './SingleDeck';
import Quiz from './Quiz';

const Tabs = TabNavigator({
  Decks: {
    screen: ScreenDeck,
    navigationOptions: {
      topBarLabel: 'Decks'
    }
  },
  Add: {
    screen: Deck,
    navigationOptions: {
      topBarLabel: 'Add New Deck'
    }
  }
},
{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: blueHighlight,
    style: {
      height: 50,
      backgroundColor: blue,
      shadowColor: 'rgba(0, 0, 0, 0.4)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const navigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: blue
  }
};

const Main = StackNavigator({
  Home: {
    screen: Tabs
},
IndividualDeck: {
  screen: SingleDeck,
  navigationOptions
},
Quiz: {
  screen: Quiz,
  navigationOptions
},
AddCard: {
  screen: Card,
  navigationOptions
}
});

export default Main;