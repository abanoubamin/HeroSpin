import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {colors, commonStyles} from '../../theme';

export const HeroCard = ({heroDetails: {imageURL, name}}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.cardContainer}>
      <FastImage
        style={styles.cardImg}
        source={{uri: imageURL, priority: FastImage.priority.high}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    flex: 1,
    margin: 5,
    ...commonStyles.elevation_5,
  },
  cardImg: {height: 200, width: '100%'},
  name: {
    color: colors.black,
    fontWeight: '600',
    marginHorizontal: 2,
    marginVertical: 8,
    textAlign: 'center',
  },
});
