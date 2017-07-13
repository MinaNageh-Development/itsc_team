// import libraries for making a componnt
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
		<Text style={textStyle}>{props.headerText}</Text>
        </View>
);
};


const styles = {
	viewStyle: {
		backgroundColor: '#4682b4',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 50 },
		elevation: 2,
		position: 'relative'

	},
	textStyle: {
		fontSize: 40
	}
};

//make the component availbe to other parts of the app

export default Header;

