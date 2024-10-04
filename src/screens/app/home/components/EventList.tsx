import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@app/hooks/redux.hook';
import { eventActions } from '@app/store/slices/events/event.slice';
import { getEventsService } from '@app/store/slices/events/events.service';

import EventCard from './EventCard';

import { IEvent } from '@app/types';
import { colors } from '@app/theme';

type Props = {
  onChooseOne?: (event: IEvent) => void
};

const EventList = (props: Props) => {

  const dispatch = useAppDispatch()
  const {events, isLoading } = useAppSelector(state => state.events)

  useEffect(() => {
    dispatch(getEventsService());
  }, [])

  const handleChooseOne = (event: IEvent) => {
    props.onChooseOne && props.onChooseOne(event);
    dispatch(eventActions.setSelectedEvent(event));
    // navigation.navigate('EventDetails', { event }); // Example navigation with react-navigation
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsHorizontalScrollIndicator={false}
    >
      {isLoading? (
        <ActivityIndicator color={colors.primary} size={50} />
      ) : (
        <>
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              onPress={() => handleChooseOne(event)}
            />
          ))}
        </>
      )}
    </ScrollView>
  )
}

export default EventList

const styles = StyleSheet.create({
  scrollContent: {
    gap: 10,
  },
})