import { View, Modal as DefaultModal, StyleSheet } from 'react-native';
import { ModalColor } from '../../constants/Color';

/**
 * 모달
 *
 * @param visible required, 모달 보이는지 여부
 * @param onRequestClose required, 모달 닫을 때 이벤트
 * @param children 모달 내용
 */
const Modal = ({ visible, onRequestClose, children }) => {
  return (
    <DefaultModal
      animationType="fade"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </DefaultModal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ModalColor.background,
  },
  modalView: {
    flex: 0.5,
    margin: 20,
    backgroundColor: ModalColor.color,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: ModalColor.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Modal;
