import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style?: TextStyle;
}
const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props;
  // 👆別の書き方；const children = props.children;
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang === true ? "!" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});
/*ReactNativeでよく使う書き方👆*/
export default Hello;
