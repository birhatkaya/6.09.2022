import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, StatusBar } from "react-native"


function Shop() {
    return(
        <View style={styles.containe} >
            <Text>Shop component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containe : {
        paddingTop: StatusBar.currentHeight,
    }
})

export default Shop