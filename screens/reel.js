import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, StatusBar } from "react-native"

function Reel() {
    return(
        <View style={styles.container}>
            <Text>Reel component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight
    }
})
export default Reel