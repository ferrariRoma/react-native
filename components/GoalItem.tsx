import { StyleSheet, Text } from 'react-native';

interface ItemData {
  itemData: string;
}

const GoalItem = ({ itemData }: ItemData) => {
  return <Text style={styles.goalItem}>{itemData}</Text>;
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 15,
    borderRadius: 6,
    borderWidth: 2,
    padding: 9,
  },
});
