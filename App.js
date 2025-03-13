import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import DistanceExercise from './components/DistanceExercise';

const Stack = createStackNavigator();

const App = () => {
  
  const [exerciseData, setExerciseData] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          initialParams={{ exerciseData, setExerciseData }} 
        />
        <Stack.Screen 
          name="Repetition" 
          component={RepetitionExercise} 
          initialParams={{ exerciseData, setExerciseData }} 
        />
        <Stack.Screen 
          name="Duration" 
          component={DurationExercise} 
          initialParams={{ exerciseData, setExerciseData }} 
        />
        <Stack.Screen 
          name="Distance" 
          component={DistanceExercise} 
          initialParams={{ exerciseData, setExerciseData }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
