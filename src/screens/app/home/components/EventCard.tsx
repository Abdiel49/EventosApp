import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextComponent from '@app/components/atoms/TextComponent'

import { colors } from '@app/theme/colors'
import { IEvent } from '@app/types';

type Props = {
  event: IEvent;
  onPress?: () => void;
};

const EventCard = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.containerCard}
    >
      <View>
        <Image
          source={{uri: props.event.poster}}
          style={styles.cardImage}
          resizeMethod='resize'
        />

        <View style={styles.cardDetails}>
          <TextComponent
            color='white'
            weight='semibold'
            size='14'
          >
            {`${props.event.rating}/10`}
          </TextComponent>
          
          <TextComponent
            color='white'
            weight='semibold'
            size='14'
          >
            {`${props.event.voteCount} Votos`}
          </TextComponent>
        </View>
      </View>

      <TextComponent
        weight='semibold'
        size='16'
      >
        {props.event.title}
      </TextComponent>
    </TouchableOpacity>
  )
}

export default EventCard

const styles = StyleSheet.create({
  containerCard: {
    width: '50%',
    gap: 10,
  },
  cardImage: {
    // width: '50%',
    minHeight: 220,
    // resizeMode: 'stretch',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.black_a40,
    borderRadius: 5,
    paddingVertical: 5,
  },
})