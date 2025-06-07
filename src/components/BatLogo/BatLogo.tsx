import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/batman-logo.png';

export function BatLogo() {
  return (
    <View>
      <Text style={styles.title}>Bat Pass Generator</Text>
      <Image source={batLogo} style={styles.image} />
    </View>
  );
}