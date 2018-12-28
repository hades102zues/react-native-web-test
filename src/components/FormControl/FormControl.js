import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

class FormControl extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue : ''
		};
	}

	onTextChangeHandler = (text) => {
		this.setState({ inputValue : text });
	};

	render(){
	   return (
			<View style={styles.FormControl}>
				<TextInput 
				   style={styles.Input} 
				   placeholder='Item'
				   value= {this.state.inputValue}
				   onChangeText = { (text) => this.onTextChangeHandler(text) }
				/>
				<Button title='Add' onPress={ () => this.props.saveText(this.state.inputValue) } />
			</View>
	  );

	}
	
}

const styles = StyleSheet.create({
	FormControl:{
		flexDirection: 'row',
		marginTop:50,
		justifyContent:'center'
	},
	Input:{
		width:'60%',
		paddingLeft: 10,
		backgroundColor: '#ccc'
	}
});

export default FormControl;