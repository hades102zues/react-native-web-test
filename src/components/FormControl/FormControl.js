import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const formControl = (props) => {
	return (
		<View style={styles.FormControl}>
			<TextInput 
			   style={styles.Input} 
			   placeholder='Item'
			   value={props.inputValue}
			/>
			<Button title='Add'/>
		</View>
	);
};

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

export default formControl;