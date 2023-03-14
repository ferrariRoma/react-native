import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { PrimaryBtn } from '../components';
import { bgAtom } from '../Atoms';

const StartGameScreen = () => {
  return (
    <View style={bgAtom.startGameScreen}>
      <TextInput />
      <PrimaryBtn>Reset</PrimaryBtn>
      <PrimaryBtn>Confirm</PrimaryBtn>
      <PrimaryBtn>Confirm</PrimaryBtn>
    </View>
  );
};

export default StartGameScreen;
