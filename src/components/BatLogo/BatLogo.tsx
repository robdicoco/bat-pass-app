import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/batman-logo.png';

interface BatLogoProps {
  tintColor?: string;
}

export function BatLogo({ tintColor }: BatLogoProps) {
  return (
    <View>
      <Text style={styles.title}>Bat Pass Generator</Text>
      <Image 
        source={batLogo} 
        style={[styles.image, tintColor ? { tintColor } : undefined]} 
      />
    </View>
  );
}