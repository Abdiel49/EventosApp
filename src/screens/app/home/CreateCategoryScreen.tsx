import { NavigationProp } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import React from 'react'

import { HomeStackParamList } from '@app/navigation/HomeStackNavigation'

import { useAppDispatch } from '@app/hooks/redux.hook'
import { createCategoryService } from '@app/store/slices/categories'

import ScreenView from '@app/components/molecules/ScreenView'
import FiledBase from '@app/components/organisms/FiledBase'
import ButtonComponent from '@app/components/molecules/ButtonComponent'
import TextComponent from '@app/components/atoms/TextComponent'

type Props = {
  navigation: NavigationProp<HomeStackParamList>
}

const CreateCategoryScreen = (props: Props) => {
  const {control, handleSubmit, formState} = useForm({
    reValidateMode: 'onSubmit'
  });
  const {errors, isValid } = formState;

  const dispatch = useAppDispatch();
  
  const handleOnSaveCategory = async (data: any) => {
    console.log('data', data)
    // await dispatch(createCategoryService(data))
    // props.navigation.goBack();
  };

  return (
    <ScreenView>
      <View style={styles.formSection}>
        <FiledBase
          input
          label="Nombre"
          placeholder={'Nueva categoria'}
        />

        <FiledBase
          input
          label="Color"
          placeholder={'#23AF4F'}
        />

        <FiledBase
          input
          label="Icon name"
          placeholder={'Material icon name'}
        />
      </View>
    </ScreenView>
  )

  // return (
  //   <ScreenView>
  //     <View style={styles.formSection}>
  //     <Controller
  //       control={control}
  //       rules={{
  //         required: true,
  //       }}
  //       render={({ field: { onChange, onBlur, value } }) => (
  //         <FiledBase
  //           input
  //           label="Nombre"
  //           placeholder={'Nueva categoria'}
  //           onBlur={onBlur}
  //           value={value}
  //           onChangeText={onChange}
  //         />
  //       )}
  //       name="name"
  //     />
  //     {errors.name && <TextComponent color='dark'>This is required.</TextComponent>}
  //       {/* <FiledBase
  //         input
  //         label="Nombre"
  //         placeholder={'Nueva categoria'}
  //       /> */}

  //     <Controller
  //       control={control}
  //       rules={{
  //        required: true,
  //       }}
  //       render={({ field: { onChange, onBlur, value } }) => (
  //         <FiledBase
  //           input
  //           label="Color"
  //           placeholder={'#23AF4F'}
  //           onBlur={onBlur}
  //           value={value}
  //           onChangeText={onChange}
  //         />
  //       )}
  //       name="color"
  //     />
  //     {errors.color && <TextComponent color='dark'>This is required.</TextComponent>}
  //       {/* <FiledBase
  //         input
  //         label="Color"
  //         placeholder={'#23AF4F'}
  //       /> */}

  //     <Controller
  //       control={control}
  //       rules={{
  //        required: true,
  //       }}
  //       render={({ field: { onChange, onBlur, value } }) => (
  //         <FiledBase
  //           input
  //           label="Icon name"
  //           placeholder={'Material icon name'}
  //           onBlur={onBlur}
  //           value={value}
  //           onChangeText={onChange}
  //         />
  //       )}
  //       name="icon"
  //     />
  //     {errors.icon && <TextComponent color='dark'>This is required.</TextComponent>}
  //       {/* <FiledBase
  //         input
  //         label="Icon name"
  //         placeholder={'Material icon name'}
  //       /> */}
  //     </View>

  //     <ButtonComponent
  //       title='Guardar Categoria'
  //       onPress={handleSubmit(handleOnSaveCategory)}
  //       disabled={!isValid}
  //     />
  //   </ScreenView>
  // )
}

export default CreateCategoryScreen

const styles = StyleSheet.create({
  formSection: {
    gap: 24,
  },
})
