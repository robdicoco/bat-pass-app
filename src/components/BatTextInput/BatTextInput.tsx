import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(props : BatTextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Password"
              value={props.pass}
      />
    </View>
  );
}