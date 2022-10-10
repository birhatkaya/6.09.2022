import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function Search() {
  return (
    <View style={styles.container}>
      <Text>Search component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
export default Search;
