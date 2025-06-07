import React from 'react';
import { View, Text, Pressable} from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

interface BatButtonProps {
  onCopy?: () => void;
  passwordSize: number;
}

export function BatButton({ onCopy, passwordSize }: BatButtonProps) {
  const [pass, setPass] = React.useState('');

  function generatePass() {
    setPass(generatePassword(passwordSize));
  }

//   const [copiedText, setCopiedText] = useState('');

//   const fetchCopiedText = async () => {
//     const text = await Clipboard.getStringAsync();
//     setCopiedText(text);
//   };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(pass);
    onCopy?.();
  };

  return (

    <View style={styles.container}>

        <BatTextInput pass={pass} />
        {/* <Button title="Generate" 
            accessibilityLabel='Generate'
            onPress={() => {console.log('Generate')}}/> */}
        <Pressable style={styles.button} onPress={() => {
            console.log('Generate'); 
            generatePass();
        }}>
            <Text style={styles.text}> 🦇 GENERATE 🦇 </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => {
            console.log('Copy');
            copyToClipboard();
        }}>
            <Text style={styles.text}> 🦇 COPY 🦇 </Text>
        </Pressable>
    </View>
  );
}