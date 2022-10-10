import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, StatusBar } from "react-native"


function Profile() {
    return(
        <View style={styles.container}>
            <Text>Profile component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight
    }
})

export default Profile