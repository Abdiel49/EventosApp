import { NavigationProp } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import React from 'react';

import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';

import ScreenView from '@app/components/molecules/ScreenView';
import TextComponent from '@app/components/atoms/TextComponent';
import FieldCodeInput from '@app/components/organisms/FieldCodeInput';
import ButtonComponent from '@app/components/molecules/ButtonComponent';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

const CodeValidationScreen = (props: Props) => {
  const handleValidateCode = () => {
    props.navigation.navigate('NEW_PASSWORD_SCREEN');
  };

  return (
    <ScreenView justifyContent="space-between">

      <View style={styles.section}>
        <TextComponent size="16">
          Ingresa tu código de verificación de 4 digitos enviado a email@email.com
        </TextComponent>

        <View style={styles.codeSection}>
          <FieldCodeInput />

          <View style={styles.h32}>
            <TextComponent
              size="16"
              color="primary"
              weight="bold"
              textAlign="center"
            >
              Reenviar código
            </TextComponent>
          </View>
        </View>
      </View>

      <ButtonComponent
        title="Confirmar"
        disabled={false}
        onPress={handleValidateCode}
      />
    </ScreenView>
  );
};

export default CodeValidationScreen;

const styles = StyleSheet.create({
  section: {
    gap: 40,
  },
  codeSection: {
    gap: 12,
  },
  h32: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
