import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';

import TextComponent from '@app/components/text/TextComponent';
import FiledBase from '@app/components/fields/FiledBase';
import ButtonComponent from '@app/components/buttons/ButtonComponent';

import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';

import { mail_outline_icon } from '@app/utils/images';
import { colors } from '@app/theme/colors';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

const PasswordRecoveryScreen = (props: Props) => {
  const handleSendCodeRecovery = () => {
    props.navigation.navigate('CODE_VALIDATION_SCREEN');
  };

  return (
    <ScrollView style={styles.main} contentContainerStyle={styles.scrollContent}>

      <View style={styles.section}>
        <TextComponent size="16">
          Ingresa tu email para enviarte un código de verificación
        </TextComponent>

        <FiledBase
          input
          type="email"
          placeholder={'Email'}
          autoCapitalize="none"
          leftImage={mail_outline_icon}
        />
      </View>

      <ButtonComponent
        title="Enviar"
        disabled={false}
        onPress={handleSendCodeRecovery}
      />
    </ScrollView>
  );
};

export default PasswordRecoveryScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scroll: {},
  scrollContent: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
    gap: 40,
  },
  section: {
    gap: 40,
  },
});
