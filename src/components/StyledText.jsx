import react from "react"
import {Text, StyleSheet} from "react-native"

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		color: "grey",
	},
	bold: {
		fontWeight: "bold",
	},
	blue: {
		color: "blue",
	},
	big: {
		fontSize: 20,
	},
	small: {
		fontSize: 10,
	},
})
/* Esta manera de crear un componente nos permite crear un componente de texto, en el cual posee un estilo base, y luego chequea si se le pasan los props siguientes, y si lo hace, retorna el estilo correspondiente ademas del estilo base con el texto se que se le paso */
export default function StyledText({blue, bold, children, big, small}) {
	const textStyles = [
		styles.text,
		blue && styles.blue,
		big && styles.big,
		small && styles.big,
		bold && styles.bold,
	]
	return <Text style={textStyles}>{children}</Text>
}
