import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@app/hooks/redux.hook';
import { categoryActions, getCategoriesService } from '@app/store/slices/categories';

import CategoryBtn from '@app/components/molecules/CategoryBtn'

import { ICategory } from '@app/types';
import { colors } from '@app/theme/colors';

type Props = {
  onChange?: (category: ICategory) => void
  onPressAdd?: () => void;
}

const CategoriesList = (props: Props) => {
  const dispatch = useAppDispatch();
  const {categories, isLoading, selectedCategory} = useAppSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategoriesService())
  }, [])
  
  const handleChangeCategory = (category: ICategory) => {
    dispatch(categoryActions.setSelectedCategory(category));
    props.onChange && props.onChange(category)
  };

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.categoriesContent}
      showsHorizontalScrollIndicator={false}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.primary} size={50} />
      ) : (
        <>
          {categories.map(category => (
            <CategoryBtn
              key={category.id}
              color={category.color}
              icon={category.icon}
              name={category.name}
              isActive={(category.id === selectedCategory?.id) || false}
              onPress={() => {
                handleChangeCategory(category)
              }}
            />
          ))}
          <CategoryBtn
            key={9999}
            color={'green'}
            icon={'add-circle'}
            name={'Crear categoria'}
            isActive={(9999 === selectedCategory?.id) || false}
            onPress={props.onPressAdd}
          />
        </>
      )
    }
    </ScrollView>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
  categoriesContent: {
    // flexDirection: 'row',
    // justifyContent:'space-around',
    paddingHorizontal: 20,
    gap: 20,
  },
})