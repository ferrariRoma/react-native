import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';
import { GoalFlatList } from '../App';

interface GoalInputProps {
  setCourseGoals: React.Dispatch<React.SetStateAction<GoalFlatList[]>>;
  isModal: boolean;
  modalHandler: () => void;
}

const GoalInput = ({
  setCourseGoals,
  isModal,
  modalHandler,
}: GoalInputProps) => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (input: string): void => {
    // QUESTION : useRef를 통해서 input 값을 가져올 때는 어떻게 해야 하지?
    setGoal(input);
  };

  const addGoalHandler = (): void => {
    if (goal === '') return;
    setCourseGoals((prev) => {
      return [...prev, { goal, id: Math.random() * 99 }];
    });
    setGoal('');
  };

  return (
    <Modal visible={isModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={goal}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonWrapper}>
          <Button onPress={addGoalHandler} title="Add Goal" />
          <Button onPress={modalHandler} title="Cancel" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    // flex: 1,
    borderWidth: 1,
    borderColor: '#001aff',
    width: '70%',
    marginBottom: 20,
    padding: 8,
  },
  buttonWrapper: {
    height: 100,
    justifyContent: 'space-between',
  },
});
