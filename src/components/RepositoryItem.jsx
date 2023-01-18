import react from "react"
import {View, Text, ScrollView, FlatList, StyleSheet} from "react-native"
import StyledText from "./StyledText"
const RepositoryItem = (props) => {
	/* La unidad son los pixeles naturales del dispositivo, depende enteramente del dispositivo */
	return (
		<View key={props.id} style={styles.container}>
			<StyledText bold>Id: {props.id}</StyledText>
			<StyledText blue>Full Name: {props.fullName}</StyledText>
			<StyledText blue>Descripcion{props.descripcion}</StyledText>
			<StyledText small>Lenguage:{props.lenguage}</StyledText>
			<StyledText small>Stars: {props.stargazersCount}</StyledText>
			<StyledText big>ForksCount: {props.forksCount}</StyledText>
			<StyledText big>Review Count: {props.reviewCount}</StyledText>
			<StyledText bold>Rating: {props.ratingAverage}</StyledText>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
	strong: {
		color: "#0099ff",
		fontWeight: "bold",
		marginBottom: 5,
	},
})

export default RepositoryItem
