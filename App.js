import React from "react"
import Main from "./src/components/Main.jsx"
import {NativeRouter} from "react-router-native"

/* Componen las vistas, sirven para crear las interfaces de los usuarios */
/* Los Text String siempre tienen que estar rederizados dentro de un Text component */
export default function App() {
	/* En el video esto originalmente da error, pero en la version actual si funciona */
	return (
		<NativeRouter>
			<Main />
		</NativeRouter>
	)
}
