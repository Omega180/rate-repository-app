import react from "react"
import {Text, FlatList} from "react-native"
import repositories from "../data/repositories.js"
import RepositoryItem from "./RepositoryItem.jsx"
const RepositoryList = () => {
	return (
		/* Scroll View y Flatlist se usan cuando necesitas renderizar contenido que no cabe en 1 sola pagina */
		<FlatList
			data={repositories}
			ItemSeparatorComponent={() => <Text></Text>}
			/* En este caso los repo se estan pasando como props para el componente de item */
			renderItem={({item: repo}) => <RepositoryItem {...repo} />}
		/>
	)
}

export default RepositoryList
