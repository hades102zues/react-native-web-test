import React, { Component } from 'React';
import { View, StyleSheet } from 'react-native';


import Item from './Item/Item';
import FormControl from '../FormControl/FormControl';



class ItemList extends Component {



	render () {
		return (
			  <React.Fragment>
				  <FormControl />
				  <View style={styles.ItemList}>
					<Item text="Ogaa"/>
					<Item text="Booga"/>
					<Item text="Shaia"/>
					<Item text="Shais"/>
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