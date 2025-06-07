import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { View, Text } from 'react-native';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatButton } from '../../components/BatButton/BatButton';
import { styles } from './HomeStyles';

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}> <BatLogo /></View>
      <View style={styles.inputContainer}> 
      <BatButton />
      </View>
     
      <StatusBar style="light" />
    </View>
  );
}