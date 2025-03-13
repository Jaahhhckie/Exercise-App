import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DistanceExercise = ({ name, navigation, route }) => {
  const [distance, setDistance] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const { exerciseData, setExerciseData } = route.params; 

  useEffect(() => {
    let interval;

    if (timerActive) {
      interval = setInterval(() => {
        if (startTime !== null) {
          const currentTime = new Date().getTime();
          const elapsedTimeInSeconds = (currentTime - startTime) / 1000;
          
          setDistance((prevDistance) => prevDistance + 5 * elapsedTimeInSeconds);
        }
      }, 1000); 
    }

    return () => clearInterval(interval);
  }, [timerActive, startTime]);

  const handleStart = () => {
    setTimerActive(true);
    setStartTime(new Date().getTime());
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setStartTime(null);
    setDistance(0);
  };

  const handleSuggestedNavigation = () => {
    navigation.navigate('Repetition'); 
  };

  const handleHomeNavigation = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Walking Distance: {distance.toFixed(2)} meters</Text>
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={handleStart} />
        <View style={styles.buttonSpacer} />
        <Button title="Stop" onPress={handleStop} />
        <View style={styles.buttonSpacer} />
        <Button title="Reset" onPress={handleReset} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Suggested: Push-ups" onPress={handleSuggestedNavigation} />
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

export default DistanceExercise;
