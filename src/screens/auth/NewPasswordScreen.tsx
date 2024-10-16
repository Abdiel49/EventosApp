import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';

import ScreenView from '@app/components/molecules/ScreenView';
import TextComponent from '@app/components/atoms/TextComponent';
import FieldInputPassword from '@app/components/organisms/FieldInputPassword';
import ButtonComponent from '@app/components/molecules/ButtonComponent';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

const NewPasswordScreen = (props: Props) => {
  const handleChangePassword = () => {
    props.navigation.navigate('SIGN_IN_SCREEN');
  };

  return (
    <ScreenView justifyContent="space-between">
      <View style={styles.section40}>
        <TextComponent size="16">
          Tu nueva contraseña debe ser diferente a la anterior
        </TextComponent>

        <View style={styles.section}>
          <FieldInputPassword
            input
            label="Nueva contraseña"
            type="password"
            placeholder={'Nueva contraseña'}
            autoCapitalize="none"
          />

          <FieldInputPassword
            input
            label="Confirmar contraseña"
            type="password"
            placeholder={'Confirmar contraseña'}
            autoCapitalize="none"
          />
        </View>
      </View>


      <ButtonComponent
        title="Cambiar contraseña"
        disabled={false}
        onPress={handleChangePassword}
      />
    </ScreenView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  section: {
    gap: 12,
  },
  section40: {
    gap: 40,
  },
});
