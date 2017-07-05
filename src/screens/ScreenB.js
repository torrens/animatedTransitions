import React from 'react';
import {Button, StyleSheet, Text, Image} from 'react-native';
var Animatable = require('react-native-animatable');

export default class ScreenB extends React.Component {

  render() {
    return (
        <Animatable.View animation={this.props.startAnimation} duration={this.props.duration} style={[styles.container]} ref="view">
          <Image style={styles.image} source={require('../../assets/images/Yoshi-PNG-File.png')}>
            <Text style={styles.title}>Screen B</Text>
            <Text style={styles.title}>You just saw {this.props.startAnimation}</Text>
            <Button title="Back" onPress={() => this.refs.view.animate('fadeOut', 500)
              .then((endState) => this.props.setCurrentScreen('ScreenA', 'fadeIn'))}/>
          </Image>
        </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78AB46',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:1,
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    paddingBottom: 20,
  }
});

