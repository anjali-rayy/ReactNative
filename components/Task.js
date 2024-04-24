import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.task}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: 'skyblue',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default Task;