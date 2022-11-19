import {StyleSheet} from 'react-native';

import {colors} from '../colors';

export const commonStyles = StyleSheet.create({
  container: {flex: 1},
  cta: {marginVertical: 10},
  elevation_5: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
