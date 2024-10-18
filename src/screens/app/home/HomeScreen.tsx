import { Dimensions, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'

import SectionContainer from '@app/components/molecules/SectionContainer';
import CategoriesList from './components/CategoriesList';
import EventList from './components/EventList';

import { colors } from '@app/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '@app/navigation/HomeStackNavigation';
import normalize from '@app/utils/normalize';
import ScreenView from '@app/components/molecules/ScreenView';

type Props = {
  navigation: NavigationProp<HomeStackParamList>
}

const HomeScreen = (props: Props) => {
  const handleAddCategory = () => {
    console.log('add category')
    props.navigation.navigate('CREATE_CATEGORY')
  };

  const handleGoToAddEvent = () => {
    props.navigation.navigate('CREATE_EVENT_SCREEN')
  }

  return (
    <View style={styles.container}>
      <ScreenView>
        <SectionContainer title='Categorías'>
          <CategoriesList onPressAdd={handleAddCategory}  />
        </SectionContainer>

        <SectionContainer title='Películas'>
          <EventList />
        </SectionContainer>

      </ScreenView>
        <Pressable
          style={styles.addIconContainer}
          onPress={handleGoToAddEvent}
        >
          <IonIcon
            name="add-circle"
            style={ styles.addIcon}
          />
        </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // flexDirection: 'column',
    // backgroundColor: colors.white,
  },
  // content: {
  //   paddingVertical: 20,
  //   paddingHorizontal: 10,
  // },
  addIconContainer: {
    position: 'absolute',
    // top: Dimensions.get('screen').height - 220,
    bottom: 20,
    right: 20,
  },
  addIcon: {
    fontSize: normalize(60),
    color: colors.primary,
  },
});
