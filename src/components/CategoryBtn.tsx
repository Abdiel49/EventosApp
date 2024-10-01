import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import TextComponent from './TextComponent';

import { colors } from '../theme/colors';

type Props = {
  name: string;
  color: string;
  icon: string;
  onPress?: () => void;
  isActive?: boolean;
}

const CategoryBtn = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container, 
        {
          borderColor: props.color,
          backgroundColor: props.isActive ? props.color : 'transparent',
        },
      ]}
    >
      <MaterialIcon
        name={props.icon}
        color={props.isActive ? colors.white : props.color}
        size={18}
      />
      <TextComponent
        size='16'
        color='muted'
        weight='bold'
        customColor={props.isActive ? colors.white : props.color}
      >
        {props.name}
      </TextComponent>
    </TouchableOpacity>
  )
}

export default CategoryBtn

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15, 
    gap: 10,
  },
  isActive: {

  },
})