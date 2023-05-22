import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add goal" onPress={addGoalHandler} color="#2196F3" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          style={styles.scrollView}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  goalsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  goalItem: {
    backgroundColor: "#2196F3",
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
  },
  scrollView: {
    height: "80%",
  },
});
