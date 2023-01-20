import react from "react"
import {Text, StyleSheet} from "react-native"
import theme from "../theme.js"
/* Utilizando los temas, podemos pasar valores de un objeto JS para utilizarlos dentro de nuestros estilos */
const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorSecondary: {
		color: theme.colors.textSecondary,
	},
	bold: {
		fontWeight: theme.fontWeights.bold,
	},
	subheading: {
		fontSize: theme.fontSizes.subheading,
	},
	textAlignCenter: {
		textAlign: "center",
	},
})
/* Esta manera de crear un componente nos permite crear un componente de texto, en el cual posee un estilo base, y luego chequea si se le pasan los props siguientes, y si lo hace, retorna el estilo correspondiente ademas del estilo base con el texto se que se le paso */
export default function StyledText({
	/* Estos son los props que se le pueden pasar a la funcion del objeto */
	align,
	children,
	color,
	fontSize,
	fontWeight,
	style,
	...restOfProps
}) {
	const textStyles = [
		styles.text,
		align === "center" && styles.textAlignCenter,
		color === "primary" && styles.colorPrimary,
		color === "secondary" && styles.colorSecondary,
		fontSize === "subheading" && styles.subheading,
		fontWeight === "bold" && styles.bold,
		style,
	]
	/* nuestro componente personalizado retorna un componente de texto con los estilos aplicados, el resto de los props, y el resto que se le pasa al objeto en si */
	return (
		<Text style={textStyles} {...restOfProps}>
			{children}
		</Text>
	)
}
