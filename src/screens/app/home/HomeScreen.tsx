import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import SectionContainer from '@app/components/molecules/SectionContainer';
import CategoriesList from './components/CategoriesList';
import EventList from './components/EventList';

import { colors } from '@app/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '@app/navigation/HomeStackNavigation';

type Props = {
  navigation: NavigationProp<HomeStackParamList>
}

const HomeScreen = (props: Props) => {
  const handleAddCategory = () => {
    console.log('add category')
    props.navigation.navigate('CREATE_CATEGORY')
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <SectionContainer title='Categorías'>
        <CategoriesList onPressAdd={handleAddCategory}  />
      </SectionContainer>

      <SectionContainer title='Películas'>
        <EventList />
      </SectionContainer>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
