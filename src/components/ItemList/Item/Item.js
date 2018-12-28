import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




const item = (props) => (
	<View style={styles.Item}>
		<Text>{props.text}</Text>
	</View>
);

const styles = StyleSheet.create({
	Item: {
		backgroundColor: "#ccc",
		marginTop: 5,
		marginBottom: 5,
		width:'60%'
	}
});


export default item;