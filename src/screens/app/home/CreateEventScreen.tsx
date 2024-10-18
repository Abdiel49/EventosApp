import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenView from '@app/components/molecules/ScreenView'
import TextComponent from '@app/components/atoms/TextComponent'
import { Controller, useForm } from 'react-hook-form'
import { IEvent } from '@app/types'
import FiledBase from '@app/components/organisms/FiledBase'
import ButtonComponent from '@app/components/molecules/ButtonComponent'

const CreateEventScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IEvent>({
    defaultValues: {
      title: '',
      rating: 0,
      voteCount: 0,
      poster: '',
      categoryId: undefined,
      description: '',
      languages: [],
      formats: [],
      favorite: false,
    },
    mode: 'onChange', // Valida en tiempo real
  });

  const onSubmit = async (data: IEvent) => {
    try {
      console.log('Evento registrado:', data);
      Alert.alert('Éxito', 'El evento ha sido creado correctamente.');
      // navigation.navigate('EventList'); // Redirige a la lista de eventos
    } catch (error) {
      console.error('Error registrando el evento:', error);
      Alert.alert('Error', 'No se pudo crear el evento.');
    }
  };



  return (
    <ScreenView>
      <TextComponent size="16">Registrar un nuevo evento</TextComponent>

      <View style={styles.section}>
        <Controller
          control={control}
          name="title"
          rules={{ required: 'El título es obligatorio' }}
          render={({ field: { onChange, value } }) => (
            <FiledBase
              placeholder="Título"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.title && <TextComponent color="primary">{errors.title.message}</TextComponent>}

        <Controller
          control={control}
          name="description"
          rules={{ required: 'La descripción es obligatoria' }}
          render={({ field: { onChange, value } }) => (
            <FiledBase
              input
              placeholder="Enlace del póster"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.description && <TextComponent color="primary">{errors.description.message}</TextComponent>}

        <Controller
          control={control}
          name="categoryId"
          rules={{ required: 'Selecciona una categoría' }}
          render={({ field: { onChange, value } }) => (
            <FiledBase
              input
              placeholder="Enlace del póster"
              value={value + ''}
              onChangeText={onChange}
            />
          )}
        />
        {errors.categoryId && <TextComponent color="primary">{errors.categoryId.message}</TextComponent>}

        <Controller
          control={control}
          name="poster"
          rules={{ required: 'El enlace del póster es obligatorio' }}
          render={({ field: { onChange, value } }) => (
            <FiledBase
              placeholder="Enlace del póster"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.poster && <TextComponent color="primary">{errors.poster.message}</TextComponent>}

        <Controller
          control={control}
          name="rating"
          rules={{ required: 'El rating es obligatorio', min: 0, max: 5 }}
          render={({ field: { onChange, value } }) => (
            <FiledBase
              placeholder="Rating (0 - 5)"
              value={String(value)}
              onChangeText={(text) => onChange(Number(text))}
              keyboardType="numeric"
            />
          )}
        />
        {errors.rating && <TextComponent color="primary">El rating debe estar entre 0 y 5.</TextComponent>}

        <Controller
          control={control}
          name="voteCount"
          rules={{ required: 'El número de votos es obligatorio', min: 0 }}
          render={({ field: { onChange, value } }) => (
            <FiledBase
              placeholder="Número de votos"
              value={String(value)}
              onChangeText={(text) => onChange(Number(text))}
              keyboardType="numeric"
            />
          )}
        />
        {errors.voteCount && <TextComponent color="primary">Debe ser un número positivo.</TextComponent>}

        <ButtonComponent
          title="Registrar evento"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>

    </ScreenView>
  )
}

export default CreateEventScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
  section: {
    marginVertical: 10,
    gap: 20,
  },
  dropdownButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dropdownButtonText: {
    textAlign: 'left',
    color: '#444',
  },

})