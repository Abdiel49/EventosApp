import { Image, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '@app/theme';
import normalize from '@app/utils/normalize';

// import { checkbox_check_icon, checkbox_outline_icon } from '@app/utils/images';

type Props = {
  isActive?: boolean;
  color?: string;
  onChange?: (value: boolean) => void;
};

const CheckboxComponent = (props: Props) => {
  const [active, setActive] = useState(props.isActive ?? false);

  const handleOnChange = () => {
    const newValue = !active;
    setActive(newValue);
    props.onChange && props.onChange(newValue);
  };

  return (
    <Pressable onPress={handleOnChange}>
      {active ? (
        <MaterialIcon
          name="check-box"
          style={styles.check}
        />
      ) : (
        <MaterialIcon
          name="check-box-outline-blank"
          style={styles.check}
        />
      )}
    </Pressable>
  );
};

export default CheckboxComponent;

const styles = StyleSheet.create({
  container: {

  },
  check: {
    width: 20,
    height: 20,
    fontSize: normalize(20),
    color: colors.primary,
  },
  checkActive: {
    width: 20,
    height: 20,
    fontSize: normalize(20),
    color: colors.primary,
  },
});
