import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

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
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={goal}
          placeholder="Your course goal!"
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(item) => {
            return (
              <Text key={item} style={styles.goalItem}>
                {item}
              </Text>
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    marginVertical: 15,
    borderRadius: 6,
    borderWidth: 2,
    padding: 9,
  },
});
