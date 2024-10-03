import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import SectionContainer from '@app/components/molecules/SectionContainer';
import CategoriesList from './components/CategoriesList';
import EventList from './components/EventList';

import { colors } from '@app/theme/colors';

const HomeScreen = () => {

  return (
    <ScrollView style={styles.container}>

      <SectionContainer title='Categorías'>
        <CategoriesList  />
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
  }
});
