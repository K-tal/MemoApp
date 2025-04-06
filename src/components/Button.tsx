import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  label: string;
  onPress?: () => void; //何も返さないことを示す時の書き方
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E0A9E4",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});

export default Button;
