import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextComponent from '@app/components/atoms/TextComponent';
import { colors } from '@app/theme';

type Props = {
  title?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const FooterComponent = (props: Props) => {
  return (
    <View>
      {true && (
        <TextComponent textAlign='center' size='18'>
          Loading...
        </TextComponent>
      )}
      {true && (
        <ActivityIndicator color={colors.primary} size={50} />
      )}

      <Text>{props.title ?? 'FooterComponent'}</Text>
      {props.children}
    </View>
  )
}

export default FooterComponent

const styles = StyleSheet.create({})