import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    greeting: undefined
	}
    }
    
    render() {
	if (this.state.greeting) return this.renderAfterButton();
    return (
      <View testID='welcome' style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
	    <TouchableOpacity testID='hello_button' onPress={this.onButtonPress.bind(this, 'Hello')}>
            <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button' onPress={this.onButtonPress.bind(this, 'World')}>
            <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
        </TouchableOpacity>
      </View>
    );
    }

    renderAfterButton() {
	return (
		<View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
		<Text style={{fontSize: 25}}>{this.state.greeting}!!!</Text>
	        </View>
	);
    }


    onButtonPress(greeting) {
	this.setState({
	    greeting: greeting
	});
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
