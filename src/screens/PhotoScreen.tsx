import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootNativeStackNavigatorParamsList } from '../../App';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import PaginationButton from '../components/ui/PaginationButton';

function PhotoScreen({navigation, route}: NativeStackScreenProps<RootNativeStackNavigatorParamsList, 'Photo'> ) {

  const [photoInfo, setPhotoInfo] = useState<{[index: string]: any} | undefined>();
  const photos = useSelector((state: RootState) => state.photos);

  useEffect(() => {
    if (photos.length > 0 && route.params.id) setPhotoInfo(photos.find(ph => ph.id === route.params.id));
  }, [photos, route]);

  const goBack = () => navigation.goBack();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
        <Text style={styles.h1}>Photo by {photoInfo?.user?.name}</Text>
        <Image
          source={{uri: photoInfo?.urls?.regular}}
          style={styles.image}
          alt={photoInfo?.alt_description}
        />
        {photoInfo?.description && (
          <View style={{marginBottom: 16}}>
            <Text style={{marginBottom: 6}}>Description: </Text>
            <Text>{photoInfo?.description}</Text>
          </View>
        )}
        <View style={{display: 'flex', alignItems: 'flex-start', paddingBottom: 32}}>
          <PaginationButton
            text={'Go back'}
            style={styles.button}
            onPress={goBack}
          />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 16,
  },
  h1: {
    fontWeight: '500',
    fontSize: 32,
    marginBottom: 16,
  },
  image:{
    width: '100%',
    height: 400,
    marginBottom: 16,
  },
  button: {
    width: 'auto',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 12,
    paddingLeft: 12,
  },
});
export default PhotoScreen;
