import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatButton } from '../../components/BatButton/BatButton';
import { BatPasswordSize } from '../../components/BatPasswordSize/BatPasswordSize';
import { styles } from './HomeStyles';

export function Home() {
  const [logoColor, setLogoColor] = useState<string | undefined>(undefined);
  const [passwordSize, setPasswordSize] = useState(10);

  const handleCopy = () => {
    setLogoColor('#E5BF3D');
    setTimeout(() => {
      setLogoColor(undefined);
    }, 1000);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <View style={styles.logoContainer}>
        <BatLogo tintColor={logoColor} />
      </View>
      <View style={styles.inputContainer}> 
        <BatPasswordSize 
          value={passwordSize} 
          onValueChange={setPasswordSize} 
        />
        <BatButton 
          onCopy={handleCopy} 
          passwordSize={passwordSize}
        />
      </View>
    </View>
  );
}