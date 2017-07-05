import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
var Animatable = require('react-native-animatable');

const transitionPairs = [
  ['fadeOut', 'fadeIn'],
  ['bounceOut', 'bounceIn'],
  ['bounceOutRight', 'bounceInRight'],
  ['bounceOutLeft', 'bounceInLeft'],
  ['zoomOut', 'zoomIn'],
  ['zoomOutLeft', 'zoomInRight'],
  ['flipOutX', 'flipInX'],
  ['flipOutY', 'flipInY'],
  ['lightSpeedOut', 'lightSpeedIn']];

export default class ScreenA extends React.Component {

  render() {
    let duration = this.props.duration;
    return (
        <Animatable.View animation={this.props.startAnimation} duration={500} style={[styles.container]} ref="view">
          <Text style={styles.title}>Screen A</Text>

          <View style={styles.rowView}>
            <View style={styles.leftColumn}>
              <Text style={styles.columnHeader}>Attention</Text>
              <Button title="bounce" onPress={() => this.refs.view.bounce(duration)} />
              <Button title="flash" onPress={() => this.refs.view.flash(duration)} />
              <Button title="jello" onPress={() => this.refs.view.jello(duration)} />
              <Button title="pulse" onPress={() => this.refs.view.pulse(duration)} />
              <Button title="rotate" onPress={() => this.refs.view.rotate(duration)} />
              <Button title="rubberBand" onPress={() => this.refs.view.rubberBand(duration)} />
              <Button title="shake" onPress={() => this.refs.view.shake(duration)} />
              <Button title="swing" onPress={() => this.refs.view.swing(duration)} />
              <Button title="tada" onPress={() => this.refs.view.tada(duration)} />
              <Button title="wobble" onPress={() => this.refs.view.wobble(duration)} />
            </View>

            <View style={styles.rightColumn}>
              <Text style={styles.columnHeader}>Transitions</Text>

              {transitionPairs.map((pair, index) => {
                return <Button key={index} title={pair[0]} onPress={() => this.refs.view.animate(pair[0], duration)
                  .then((endState) => this.props.setCurrentScreen('ScreenB', pair[1]))}/>
              })}

            </View>
          </View>
        </Animatable.View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCED91',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20
  },
  leftColumn: {
    paddingRight: 40
  },
  rightColumn: {
    paddingLeft: 40
  },
  columnHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

