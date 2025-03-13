import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation, route }) => {
  const { exerciseData, setExerciseData } = route.params; 

  const handleNavigation = (exercise) => {
    navigation.navigate(exercise);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('Repetition')}
      >
        <Text style={styles.buttonText}>Push-ups</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('Duration')}
      >
        <Text style={styles.buttonText}>Running</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('Distance')}
      >
        <Text style={styles.buttonText}>Walking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
