import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DurationExercise = ({ name, navigation, route }) => {
  const [duration, setDuration] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const { exerciseData, setExerciseData } = route.params;

  useEffect(() => {
    let interval;

    if (timerActive) {
      interval = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 0.01); 
      }, 10); 
    }

    return () => clearInterval(interval);
  }, [timerActive]);

  const handleStart = () => {
    setTimerActive(true);
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setDuration(0);
  };

  const handleSuggestedNavigation = () => {
    navigation.navigate('Distance'); 
  };

  const handleHomeNavigation = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Running Duration: {formatDuration(duration)}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={handleStart} />
        <View style={styles.buttonSpacer} />
        <Button title="Stop" onPress={handleStop} />
        <View style={styles.buttonSpacer} />
        <Button title="Reset" onPress={handleReset} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Suggested: Walking" onPress={handleSuggestedNavigation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={handleHomeNavigation} />
      </View>
    </View>
  );
};

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const milliseconds = Math.floor((seconds - Math.floor(seconds)) * 100); 

  return `${padZero(minutes)}:${padZero(remainingSeconds)}.${padZero(milliseconds)}`;
};

const padZero = (value) => (value < 10 ? `0${value}` : value);

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

export default DurationExercise;
