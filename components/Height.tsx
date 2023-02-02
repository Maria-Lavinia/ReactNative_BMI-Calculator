import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';

interface Props {
    height: number;
  }

const Height: React.FC<Props> = ({height}) =>  {
    const [heightVal, setHeight] = useState<string>('');
    
    return (
    <SafeAreaView>
     <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={heightVal}
        onChangeText={setHeight}
      />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
export default Height;