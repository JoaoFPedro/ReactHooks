import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleCountChange = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button title="Press Me" onPress={() => handleCountChange}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
