import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './BatPasswordSizeStyles';

interface BatPasswordSizeProps {
  value: number;
  onValueChange: (value: number) => void;
}

export function BatPasswordSize({ value, onValueChange }: BatPasswordSizeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password Length: {value}</Text>
      <Slider
        style={styles.slider}
        minimumValue={8}
        maximumValue={32}
        step={1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#E5BF3D"
        maximumTrackTintColor="#434343"
        thumbTintColor="#E5BF3D"
      />
    </View>
  );
} 