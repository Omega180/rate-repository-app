import react from "react"
import {View} from "react-native"
import RepositoryItem from "./RepositoryItem"
import StyledText from "./StyledText"
const parseThousands = (value) => {
	return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryStats = (props) => {
	return (
		/* La direccion por defecto es column */
		<View style={{flexDirection: "row", justifyContent: "space-around"}}>
			{/* De esta manera separamos de manera individual cada vista (como si fuera un div), asi las vistas se direccionan en filas pero los textos internos se dividen en columnas */}
			<View>
				<StyledText align="center">
					{parseThousands(props.stargazersCount)}
				</StyledText>
				<StyledText align="center" fontWeight={"bold"}>
					Stars{" "}
				</StyledText>
			</View>
			<View>
				<StyledText align="center">
					{parseThousands(props.forksCount)}
				</StyledText>
				<StyledText align="center" fontWeight={"bold"}>
					ForksCount{" "}
				</StyledText>
			</View>
			<View>
				<StyledText align="center">
					{parseThousands(props.reviewCount)}
				</StyledText>
				<StyledText align="center" fontWeight={"bold"}>
					Review Count
				</StyledText>
			</View>
			<View>
				<StyledText>{parseThousands(props.ratingAverage)}</StyledText>
				<StyledText fontWeight={"bold"}>Rating</StyledText>
			</View>
		</View>
	)
}

export default RepositoryStats
