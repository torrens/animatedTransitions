import React from 'react';
import { StatusBar } from 'react-native';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/ScreenB';

StatusBar.setHidden(true);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 'ScreenA',
      startAnimation: 'bounceInLeft',
      duration: 1500
    }
  }

  render() {
    return (
      this.getCurrentScreen()
    );
  }

  setCurrentScreen(screenName, startAnimation) {
    this.setState({
      currentScreen: screenName,
      startAnimation: startAnimation});
  }

  getCurrentScreen() {
    switch(this.state.currentScreen) {
      case 'ScreenA':
        return <ScreenA startAnimation={this.state.startAnimation}
                        duration={this.state.duration}
                        setCurrentScreen={this.setCurrentScreen.bind(this)}/>;
      case 'ScreenB':
        return <ScreenB startAnimation={this.state.startAnimation}
                        duration={this.state.duration}
                        setCurrentScreen={this.setCurrentScreen.bind(this)}/>;
    }
  }
}