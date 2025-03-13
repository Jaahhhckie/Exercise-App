import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RepetitionExercise = ({ name, navigation, route }) => {
  const [repetitions, setRepetitions] = useState(0);
  const { exerciseData, setExerciseData } = route.params; 

  const handleIncrement = () => {
    setRepetitions(repetitions + 1);
  };

  const handleReset = () => {
    setRepetitions(0);
  };

  const handleSuggestedNavigation = () => {
    navigation.navigate('Duration'); 
  };

  const handleHomeNavigation = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Push-Up Repetitions: {repetitions}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={handleIncrement} />
        <View style={styles.buttonSpacer} />
        <Button title="Reset" onPress={handleReset} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Suggested: Running" onPress={handleSuggestedNavigation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={handleHomeNavigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 65,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  buttonSpacer: {
    width: 10,
  },
});

export default RepetitionExercise;
