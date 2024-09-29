import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundButton } from '../components/RoundButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          value={subject}
          label="I would like to focus on..."
        />
        <RoundButton style={styles.button} title="+" size={64} onPress={() => addSubject(subject)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: Platform.OS === 'ios' && spacing.md,
    paddingRight: Platform.OS === 'ios' && spacing.md,
    marginBottom: spacing.md
  },
  button: {
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
  inputContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },
});
