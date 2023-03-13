import { StyleSheet, Text, Pressable, View } from 'react-native';
import { GoalFlatList } from '../App';

interface ItemData {
  itemData: GoalFlatList;
  deleteGoalHandler: (arg: number) => void;
}

const GoalItem = ({ itemData, deleteGoalHandler }: ItemData) => {
  return (
    <View style={styles.WrapGoalItem}>
      <Pressable
        // android_ripple={{ color: '#35f38a' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteGoalHandler.bind(this, itemData.id)}
      >
        <Text style={styles.goalItem}>{itemData.goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#84ccd5',
  },
  WrapGoalItem: {
    marginVertical: 30,
    paddingHorizontal: 50,
  },
});
