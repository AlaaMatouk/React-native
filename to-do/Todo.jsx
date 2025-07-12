import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: task, done: false },
      ]);
      setTask("");
    }
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={[styles.taskText, item.done && styles.doneText]}>
              {item.text}
            </Text>
            <TouchableOpacity
              style={styles.smallBtn}
              onPress={() => toggleDone(item.id)}
            >
              <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallBtn}
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  addBtn: {
    backgroundColor: "#8E7DBE",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
  },
  taskContainer: {
    backgroundColor: "#C3E2C2",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    // backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  smallBtn: {
    backgroundColor: "#EEF1DA",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  btnText: {
    color: "gray",
    fontSize: 14,
  },
});
