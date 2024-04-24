import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Task from './components/Task';

const App = () => {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(null);
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>Add +</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => (
          <Task key={index} text={task} onPress={() => handleDeleteTask(index)} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 60,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'skyblue',
    borderRadius: 60,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    borderRadius: 60,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;