import { Modal, StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { colors } from '@app/theme/colors';

type BottomModalBaseProps = PropsWithChildren & {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const BottomModalBase = (props: BottomModalBaseProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={() => {
        props.setIsVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomModalBase;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black_a40,
  },
  modalView: {
    margin: 0,
    width: '100%',
    minHeight: '40%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
});
