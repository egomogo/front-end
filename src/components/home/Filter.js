import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { getCategory } from '../../axios/category';

const Filter = ({ visible, onRequestClose, onApply }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState({ nodes: [], edges: [] });

  const selectEdge = (edgeIndex) => {
    const edge = categories.edges[edgeIndex];
    const selectedNodes = edge.map((nodeIndex) => categories.nodes[nodeIndex]);

    navigation.navigate('RandomBox', {
      categories: selectedNodes.map((node) => node.name),
    });
    onRequestClose();
  };

  const selectCategory = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      if (selected.length < 5) {
        setSelected([...selected, category]);
      }
    }
  };

  useEffect(() => {
    getCategory()
      .then((res) => {
        const { nodes, edges } = res.data;
        setCategories({ nodes, edges });
      })
      .catch((e) => console.log(e.response));
  }, []);

  const applyFilter = () => {
    onApply(selected);
    setSelected([]);
    navigation.navigate('RandomBox', {
      category: selected,
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
            {categories.nodes.map((node, index) => {
              if (categories.edges.some((edge) => edge[0] === index)) {
                return (
                  <Text style={styles.categoryTitle} key={index}>
                    {node.name}{' '}
                  </Text>
                );
              }
              return (
                <FilterButton
                  key={index}
                  category={node.name}
                  isSelected={selected.includes(node.code)}
                  onPress={() => selectCategory(node.code)}
                />
              );
            })}
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
    flex: 0.9,
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
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 17,
    marginTop: 20,
    width: '100%',
    color: FilterColor.text,
  },
});

export default Filter;
