import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PhotoListItem from '../components/PhotoListItem';
import PaginationButton from '../components/ui/PaginationButton';
import { fetchPhotos } from '../store/fetchPhotos';
import { AppDispatch, RootState } from '../store/store';


type Props = {
  navigation: NativeStackNavigationProp<any>
}

function ListScreen({ navigation }: Props) {

  const photos = useSelector((state: RootState) => state.photos);
  const isLoading = useSelector((state: RootState) => state.isLoading);

  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(1);
  const disablePrev = page === 1;

  useEffect(() => {
    dispatch(fetchPhotos(page));
  }, [dispatch, page]);

  const prevPage = () => setPage(prev => prev - 1);
  const nextPage = () => setPage(prev => prev + 1);

  const navigateToPhotoScreen = (photoId: string) => navigation.navigate('Photo', { id: photoId });

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Welcome to your personal gallery</Text>
            {isLoading && <ActivityIndicator size="large" style={{margin: 16}} />}
            {!isLoading && photos && photos.length > 0 && photos.map(photo => (
              <PhotoListItem
                key={photo.id}
                id={photo.id}
                uri={photo.urls.small}
                name={photo.user.name}
                description={photo.description}
                alt_description={photo.alt_description}
                onPress={navigateToPhotoScreen}
              />
            ))}
        </View>
        <View style={styles.buttonsContainer}>
          <PaginationButton
            text={'<'}
            onPress={prevPage}
            disabled={disablePrev}
            style={{marginRight: 8}}
          />
          <Text style={styles.page}>{page}</Text>
          <PaginationButton
            text={'>'}
            onPress={nextPage}
          />
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    height: '100%',
    padding: 16,
    minHeight: '100%',
  },
  h1: {
    fontWeight: '500',
    fontSize: 32,
    marginBottom: 16,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 'auto',
  },
  page: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 8,
  },
});

export default ListScreen;
