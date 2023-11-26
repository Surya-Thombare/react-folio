import { Text, View, Style, StyleSheet } from "@react-pdf/renderer";
import { Icon, IconName } from "../icon";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Quicksand",
    fontSize: 8,
    marginLeft: 4,
  },
});

export function IconText({ style, text, iconName }) {
  return (
    <View style={[styles.container, style]}>
      <Icon size={10} name={iconName} />
      <Text style={[styles.text, { color: "black" }]}>{text}</Text>
    </View>
  );
}
