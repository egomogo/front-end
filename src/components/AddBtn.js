import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddBtn = () => {
  return (
    <View style={{ position: 'absolute', alignItems: 'center' }}>
      <View>
        <TouchableHighlight underlayColor="#7F58FF">
          <View>
            <Icon name="ios-person" size={30} color="#4F8EF7" />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AddBtn;
