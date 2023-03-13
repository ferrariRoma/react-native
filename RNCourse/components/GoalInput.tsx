import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';
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
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={goal}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonWrapper}>
          <Button onPress={addGoalHandler} title="Add Goal" />
          <Button onPress={modalHandler} title="Cancel" color="#f31282" />
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
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '70%',
    marginBottom: 20,
    padding: 8,
  },
  buttonWrapper: {
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
