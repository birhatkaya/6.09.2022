import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Logo, Messenger, Plus, Heart } from "../../../icons";
import Ionicons from "react-native-vector-icons/Ionicons";

function Header() {
  return (
    <View style={styles.outView}>
      <View style={styles.innerView}>
        <Logo style={styles.logo} />
        <Ionicons name="chevron-down-outline" style={styles.arrow} />
      </View>

      <View style={styles.action}>
        <TouchableOpacity>
          <Plus style={styles.plus} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.genel}>
          <View style={styles.dot}></View>
          <Heart />
        </TouchableOpacity>
        <TouchableOpacity style={styles.genel}>
          <View style={styles.dot}></View>
          <Messenger />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outView: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  logo: {},
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  genel: {
    marginLeft: 20,
  },
  arrow: {
    fontSize: 19,
  },
  dot: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FE3650",
    width: 10,
    height: 10,
    borderRadius: 10,
    zIndex: 2,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default Header;
