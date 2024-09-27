import {SafeAreaView, StyleSheet} from 'react-native'
import { NavigationProp } from '@react-navigation/native';

import { RootNavigationParamList } from '../navigation/AppNavigation';

import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';

type Props = {
  navigation: NavigationProp<RootNavigationParamList>,
}

const WelcomeScreen = ({ navigation }: Props) => {

  const handleOnPress = () => {
    console.log('texto en negrita presionado')
  };

  const handleOnPressButton = () => {
    // navigation.navigate('EventDetailScreen')
    navigation.navigate('EventDetailScreen', {
      name: 'abdiel',
      lastName: "Orellana",
      course: "Expo",
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextComponent
        size='24'
        weight='light'
        color='muted'
        textAlign='center'
      >
        Welcome to the App!
        <TextComponent
          size='24'
          weight='bold'
          color='primary'
          underline={true}
          onPress={handleOnPress}
        >
          Texto en negrita
        </TextComponent>
      </TextComponent>

      <ButtonComponent
        title='Ir al detalle del evento!'
        disabled={false}
        onPress={handleOnPressButton}
      />
    </SafeAreaView>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // TODO: estos estilos de texto ya no son requeridos, se eliminaran proximanente
  text: {
    fontSize: 24,
    fontWeight: '400',
  },
  textoNegrita: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
