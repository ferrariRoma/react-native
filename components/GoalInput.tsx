import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface GoalInputProps {
  setCourseGoals: React.Dispatch<React.SetStateAction<string[]>>;
}

const GoalInput = ({ setCourseGoals }: GoalInputProps) => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (input: string): void => {
    // QUESTION : useRef를 통해서 input 값을 가져올 때는 어떻게 해야 하지?
    setGoal(input);
  };

  const addGoalHandler = (): void => {
    if (goal === '') return;
    setCourseGoals((prev) => {
      return [...prev, goal];
    });
    setGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        value={goal}
        placeholder="Your course goal!"
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginRight: 8,
    padding: 8,
  },
});
