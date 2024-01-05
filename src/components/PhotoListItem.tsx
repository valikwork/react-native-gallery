import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  id: string
  uri: string
  name?: string
  description?: string
  alt_description: string
  onPress: (url: string) => void
}

function PhotoListItem({ id, uri, name, description, alt_description, onPress }: Props) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress(id)}
    >
      <Image
        source={{uri: uri}}
        style={styles.image}
        alt={alt_description}
       />
       <View style={styles.info}>
          <Text style={styles.name}>By: {name ? name : 'Unknown'}</Text>
          {description && <Text style={styles.description} numberOfLines={1}>{description}</Text>}
       </View>
       <View style={styles.button}>
        <Text>{'>'}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 12,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 250,
  },
  name: {
    marginBottom: 8,
  },
  description: {
    paddingRight: 20,
  },
  button: {
    marginLeft: 'auto',
    width: 25,
    height: 25,
    // backgroundColor: '#DBDBDB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default PhotoListItem;
