import { View, Text } from 'react-native';
import { btnStyleAtom } from '../Atoms';

const PrimaryBtn = ({ children }: { children: string }) => {
  return (
    <View style={btnStyleAtom.btnContainer}>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryBtn;
