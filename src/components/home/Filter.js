import React, { useState } from 'react';
import {
  Modal,
  Button,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
     ScrollView,
} from 'react-native';
import { FilterColor } from '../../constants/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilterButton from '../common/FilterButton';
import TextButton from '../common/TextButton';
import FilterApplyButton from '../common/FilterApplyButton';
import { foodCategory } from '../../constants/Food';
import { useNavigation } from '@react-navigation/native';

import { foodCategory1 } from '../../constants/Food';


const Filter = ({ visible, onRequestClose, onApply }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

  const selectCategory = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      if (selected.length < 5) {
        setSelected([...selected, category]);
      }
    }
  };

  const applyFilter = () => {
    onApply(selected);
    setSelected([]);
    navigation.navigate('RandomBox', {
      category: selected.map(
        (categoryName) => foodCategory[categoryName.toUpperCase()].name
      ),
    });
    onRequestClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalBackground}></View>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onRequestClose}>
          <Icon name="close" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.filterText}>카테고리 중복 선택</Text>
        <Text style={styles.filterSmallText}>* 최대 5까지 선택 가능</Text>

 <ScrollView>
        <View style={styles.buttonsContainer}>
          {foodCategory1.map((group, index) => (

            <View key={index}>
              <Text style={styles.categoryTitle} >{group.title}</Text>
              <View style={styles.categoryStyle}>
                  {group.categories
                    .filter((category) => category.name !== '')
                    .map((category, index) => (
                      <FilterButton
                        key={index}
                        category={category.text}
                        isSelected={selected.includes(category.name)}
                        onPress={() => selectCategory(category.name)}
                      />
                    ))}
                    </View>
            </View>
          ))}
        </View>
    </ScrollView>

        <FilterApplyButton
          color={
            selected.length > 0 ? FilterColor.default : FilterColor.disabled
          }
          onPress={applyFilter}
        >
          적용하기
        </FilterApplyButton>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContainer: {
    //flex: 0.9,
    marginTop: 'auto',
    backgroundColor: FilterColor.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 10,
  },
  filterText: {
    fontSize: 22,
    marginBottom: 5,
    color: FilterColor.text,
    fontWeight: 'bold',
  },
  filterSmallText: {
    fontSize: 13,
    marginBottom: 15,
  },
  categoryStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom:20
    },
});

export default Filter;
