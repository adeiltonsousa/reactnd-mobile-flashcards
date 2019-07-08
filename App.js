import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { blueDark } from './utils/colors';

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentDidMount() {
   
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={blueDark}/>
        </View>
      </Provider>
    );
  }
}