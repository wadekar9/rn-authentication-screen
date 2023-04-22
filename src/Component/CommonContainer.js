import { View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react';
import { Colors, moderateScale } from '../Config/Theme'

const CommonContainer = ({ children }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
			<View style={{ height: StatusBar.currentHeight }} />
			<View style={{ flex: 1, paddingHorizontal : moderateScale(12)}}>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default CommonContainer;