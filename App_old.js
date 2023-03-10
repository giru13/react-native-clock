import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {on: false};
  }
  render() {
    return (
      <View style={this.styles.container}>
      {this.state.on && <Clock />}
       <Button 
       title={`Turn clock ${this.state.on? 'Off' : 'On'}`}
       onPress={()=>{this.setState({on: !this.state.on})}}
       />
      <StatusBar style="dark" />
      </View>
    );
  }

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}

class Clock extends Component {
  tick = 0;

  constructor (props) {
    console.log('constructor called');
    super(props);
    this.state = {
      time: '00:00',
    };
  }

  render () {
    console.log('render called');
    return (
       <View>
        <Text>
          {this.state.time}
        </Text>
      </View>
    );
  }

componentDidMount() {
  console.log('componentDidMount called');
  this.tick =  setInterval(()=>{
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      console.info('tick');
  }, 1000);
}

componentDidUpdate() {
  console.log('componentDidUpdate called');
}

componentWillUnmount() {
 console.log('componentWillUnmount called');
 clearInterval(this.tick); 
}
}
