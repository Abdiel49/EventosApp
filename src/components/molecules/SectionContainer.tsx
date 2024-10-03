import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'

import TextComponent from '../atoms/TextComponent'

type Props = {
  title: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SectionContainer = (props: Props) => {
  return (
    <View style={[styles.categoriesContainer, props.style]}>
      <TextComponent weight='semibold' size='18'>{props.title}</TextComponent>
      {props.children}
    </View>
  )
}

export default SectionContainer

const styles = StyleSheet.create({
  categoriesContainer: {
    gap: 10,
  },
})