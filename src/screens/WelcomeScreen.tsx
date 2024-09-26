import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';

const WelcomeScreen = () => {
  const handleOnPress = () => {
    console.log('texto en negrita presionado')
  };

  const handleOnPressButton = () => {
    console.log('Este es un botón presionado');
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
        title='Preciona aquí!'
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
