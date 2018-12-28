import React, { Component } from 'React';
import { View, StyleSheet } from 'react-native';


import Item from './Item/Item';
import FormControl from '../FormControl/FormControl';



class ItemList extends Component {

	constructor(){
		super();
		this.state = {
			inputValues: []
		};
	}

	onAddChangeHandler = (text) =>{
		this.setState( (prevState) => {
			return {
				inputValues: prevState.inputValues.concat(text)
			};
		});
	}

	render () {

		const inputValues = this.state.inputValues ;
		const items = inputValues.map( (itemName, i) => {
			return (
			   <Item
				  key={i} 
				  text={itemName}
			   />
			);
		});


		return (
			  <React.Fragment>
			  	  <FormControl saveText= {this.onAddChangeHandler}   />
				  
				  <View style={styles.ItemList}>
					{items}
				  </View>

			  </React.Fragment>
		);
	} 


}

const styles = StyleSheet.create({
	ItemList : {
		alignItems: 'center',
		marginTop: 100,
	}
});


export default ItemList;