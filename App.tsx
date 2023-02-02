import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native'

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<string>('');
  const [endResult, setEndResult] = useState<string>('')

  const calculateBMI = () => {
    const h = Number(height);
    const w = Number(weight);
    const result = w / ((h / 100) * (h / 100));

    setBmi(result.toFixed(2));
    if (result < 18.5) {
      setEndResult('You are Underweight')
      } else if (result >= 18.5 && result < 25) {
        setEndResult('You are Normal')
      } else if (result >= 25 && result < 30) {
        setEndResult('You are Overweight')
      } else if (result >= 30) { 
        setEndResult('You are Obese')
      }

      Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
       <Text style={styles.label}>Height (in cm)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
       <Text style={styles.label}>Weight (in kg)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />


        <TouchableOpacity style={styles.pillButton} onPress={calculateBMI}>
      <Text style={styles.pillButtonText}>Calculate</Text>
    </TouchableOpacity>
      {bmi ? <Text style = {styles.output}>Your BMI is: {bmi}</Text> : null}
      {endResult ? <Text style = {styles.output}>{endResult}</Text> : null} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  input: {
      borderRadius: 10,
      border: 'none',
      height: 50,
      width: 300,
      backgroundColor: '#fff',
      margin: 15,
      padding: 10,
    },
    pillButton: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 25,
        width: 300,
        marginLeft: 15,
      },
       pillButtonText: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
          textAlign: 'center',
        },
        label: {
          padding: 10,
          marginLeft: 15,
        },
        output:{
          color: 'black',
          fontSize: 16,
          padding: 10,
},
});

export default BMICalculator;
