import { Dimensions, ScrollView, StatusBar, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';

import { colors } from '@app/theme/colors';

type Props = {
  children: React.ReactNode,
  justifyContent?: 'space-between',
  contentContainerStyle?: StyleProp<ViewStyle>,
  nestedScrollEnabled?: boolean;
  keyboardShouldPersistTaps?:  boolean | 'always' | 'never' | 'handled' | undefined;
}
const ScreenView = (props: Props) => {
  return (
    <ScrollView
      {...props}
      style={styles.main}
      automaticallyAdjustKeyboardInsets={true}
      keyboardShouldPersistTaps={props.keyboardShouldPersistTaps ?? 'handled'}
      contentContainerStyle={[
        styles.scrollContent,
        props.contentContainerStyle,
        props.justifyContent === 'space-between' && styles.scrollContentJC_SB,
      ]}
      >
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        {props.children}
    </ScrollView>
  );
};

export default ScreenView;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {},
  scrollContent: {
    // flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
    gap: 40,
  },
  scrollContentJC_SB: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
    gap: 40,
  },
});
