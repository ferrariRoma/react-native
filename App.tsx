import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export interface GoalFlatList {
  goal: string;
  id: number;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalFlatList[]>([]);

  const deleteGoalHandler = (id: number) => {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                deleteGoalHandler={deleteGoalHandler}
                itemData={itemData.item}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return `${index}`;
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
  goalsContainer: {
    flex: 6,
  },
});
