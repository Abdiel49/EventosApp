import { FlatList, ListRenderItem, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

type FilterType = {
  limit: number;
  offset: number;
  search: string;
  sort?: string;
};

const API_URL = 'https://api.thecatapi.com/v1/breeds';

const SearchScreen = () => {
  const [pets, setPets] = useState<PetData[]>([]);
  const [filter, setFilter] = useState<FilterType>({
    limit: 10,
    offset: 0,
    search: '',
  });
  const [loadin, setLoadin] = useState(true);

  const flatListRef = useRef<FlatList>(null);

  const loadData = async () => {
    try {
      setLoadin(true);

      setTimeout(async () => {
        const response = await axios.get(
          `${API_URL}?limit=${filter.limit}&offset=${filter.offset}`,
        );
        setPets([...pets, ...response.data]);
        setLoadin(false);
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setLoadin(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefesh = () => {
    setPets([]);
    console.log('handle refesh');
    setFilter(prevFilter => ({
     ...prevFilter,
      limit: 10,
      offset: 0,
    }));
    loadData();
  };


  const handleGetNext = () => {
    console.log('handle load more data');
    setFilter(prevFilter => ({
     ...prevFilter,
      offset: prevFilter.offset + prevFilter.limit,
    }));
    loadData();
  };

  const renderItem: ListRenderItem<PetData> = ({item, index}) => {
    return (
      <Pressable style={styles.btn}>
        <Text style={styles.textBtn}>{`${index + 1}.- ${item.name}`}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        data={pets}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        initialNumToRender={10}
        refreshControl={
          <RefreshControl refreshing={loadin} onRefresh={handleRefesh} />
        }
        onEndReached={handleGetNext}
        maxToRenderPerBatch={20}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<HeaderComponent/>}
        ListFooterComponent={<FooterComponent isLoading={loadin} />}
      />
    </SafeAreaView>
  );
}

export default SearchScreen

const styles = StyleSheet.create({
  textBtn: {
    color: 'white',
    fontWeight: '800',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  listContent: {
    gap: 20,
    paddingVertical: 20,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: 200,
    backgroundColor: 'peru',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
})

export interface PetData {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url?: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap?: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url?: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: Weight;
  wikipedia_url: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}