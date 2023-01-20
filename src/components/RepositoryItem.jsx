import React from "react"
import {View, Image, StyleSheet} from "react-native"
import StyledText from "./StyledText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"
/* Puedes remover las props con desestructuracion de elementos */
const RepositoryItemHeader = (props) => {
	return (
		<View style={{flexDirection: "row", paddingBottom: 2}}>
			<View style={{paddingRight: 10}}>
				<Image style={styles.image} source={{uri: props.ownerAvatarUrl}} />
			</View>
			{/* El Flex a veces se puede buggear y no funcionar bien, el flex 1 hace el salto de linea si llega al maximo de la caja */}
			<View style={{flex: 1, alignItems: "flex-start"}}>
				<StyledText fontWeight={"bold"}>{props.fullName}</StyledText>
				<StyledText color="secondary">
					Descripcion: {props.descripcion}
				</StyledText>
				<StyledText style={styles.lenguage}>
					Lenguage:{props.lenguage}
				</StyledText>
			</View>
		</View>
	)
}

const RepositoryItem = (props) => {
	/* La unidad son los pixeles naturales del dispositivo, depende enteramente del dispositivo */
	/*  Todas las vistas de los componentes de view poseen por defecto el estilo de display: flex */
	return (
		<View key={props.id} style={styles.container}>
			{/* Las imagenes tienen que estar estiladas o no se muestran, ademas recordar que las props son case sensitive */}
			<RepositoryItemHeader {...props}></RepositoryItemHeader>
			<RepositoryStats {...props}></RepositoryStats>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingVertical: 5,
	},
	strong: {
		color: "#0099ff",
		fontWeight: "bold",
		marginBottom: 5,
	},
	lenguage: {
		padding: 4,
		marginVertical: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		/* Esto mueve el elemento al comienzo de todo y solo usa el espacio que necesite */
		alignSelf: "flex-start",
		borderRadius: 4,
		overflow: "hidden",
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4,
	},
})

export default RepositoryItem
