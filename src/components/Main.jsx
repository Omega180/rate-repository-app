import React from "react"
import Constants from "expo-constants"
import {Text, View} from "react-native"
import RepositoryList from "./RepositoryList"

const Main = () => {
	return (
		/* Las Constantes son valores por default instalados con expo */
		<View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
			<RepositoryList></RepositoryList>
		</View>
	)
}

export default Main
