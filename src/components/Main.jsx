import React from "react"
import {Text, View} from "react-native"
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import {Routes, Route, Redirect} from "react-router-native"
/* Las Constantes son valores por default instalados con expo */
const Main = () => {
	return (
		<View style={{flex: 1}}>
			<AppBar />
			<Routes>
				<Route path="/" exact element={<RepositoryList />} />
				<Route
					path="/signin/*"
					element={
						<View>
							<Text>Working on it</Text>
						</View>
					}
				/>
			</Routes>
		</View>
	)
}

export default Main
