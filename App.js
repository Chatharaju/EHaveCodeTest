import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import './Config/ReactotronConfig'

export default class App extends React.Component {

    render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Vinay</Text>
        </TouchableOpacity>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
