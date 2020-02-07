import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Landing extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default Landing;

const styles = StyleSheet.create({
    parent: {
      backgroundColor: 'red',
      flex: 1,
    },
  });