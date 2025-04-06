import { View, Text, StyleSheet, type ViewStyle } from "react-native";

interface Props {
  children: JSX.Element;
  style?: ViewStyle;
}

const CircleButton = (props: Props): JSX.Element => {
  const { children, style } = props;
  return <View style={[styles.circleButton, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E0A9E4",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    /*shadowのプロパティーはiOSのみしか対応していない。Androidの場合はelevationを使う*/
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 50,
  },
});

export default CircleButton;
