import React, { useState } from 'react';
import {
  Modal,
  Button,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedItems([]);
  };

  const selectItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      if (selectedItems.length < 5) {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  const applyFilter = () => {
    onApply(selectedItems);
    setSelectedItems([]);
    setSelectedCategory(null);
    navigation.navigate('RandomBox', {
      category: selectedItems.map(
        (itemName) => foodCategory[selectedCategory].name
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
        <View style={styles.backCloseButton}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedCategory(null)}
          >
            <Icon name="arrow-back" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onRequestClose}>
            <Icon name="close" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.filterText}>카테고리 중복 선택</Text>
        <Text style={styles.filterSmallText}>* 최대 5까지 선택 가능</Text>
        <View style={styles.buttonsContainer}>
          {!selectedCategory
            ? Object.values(foodCategory)
                .filter((category) => category.name !== '')
                .map((category, index) => (
                  <FilterButton
                    key={index}
                    category={category.text}
                    isSelected={selectedCategory === category.name}
                    onPress={() => selectCategory(category.name)}
                  />
                ))
            : foodCategory1
                .find((category) => category.title === selectedCategory)
                .categories.map((item, index) => (
                  <FilterButton
                    key={index}
                    category={item.text}
                    isSelected={selectedItems.includes(item.name)}
                    onPress={() => selectItem(item.name)}
                  />
                ))}
        </View>
        <FilterApplyButton
          color={
            selectedItems.length > 0
              ? FilterColor.default
              : FilterColor.disabled
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
    marginTop: 'auto',
    backgroundColor: FilterColor.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  backCloseButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
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
});

export default Filter;
