import React, {useRef, useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  ActivityIndicator,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';

import {getMovies} from '../services';
import {colors, commonStyles} from '../theme';

const MoviesWheel = () => {
  const {
    params: {heroName},
  } = useRoute();
  const navigation = useNavigation();
  const wheelRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [disableCTA, setDisableCTA] = useState(false);
  const wheelOptions = {
    rewards: movies?.map(movie => movie.Title).slice(0, 6),
    knobSize: 50,
    borderWidth: 5,
    borderColor: colors.black,
    innerRadius: 50,
    duration: 4000,
    backgroundColor: colors.transparent,
    textAngle: 'horizontal',
    knobSource: require('../assets/images/knob.png'),
    getWinner: (_, index) => {
      navigation.replace('MovieDetails', {
        heroName,
        movieID: movies[index].imdbID,
      });
    },
    onRef: ref => (wheelRef.current = ref),
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getMovies(heroName);
      setMovies(response?.Search);
      setLoading(false);
    }

    fetchData();
  }, [heroName]);

  const onCTAPress = () => {
    setDisableCTA(true);
    wheelRef.current._onPress();
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <WheelOfFortune options={wheelOptions} />
          <View style={commonStyles.cta}>
            <Button
              disabled={disableCTA}
              title="Run the wheel"
              onPress={onCTAPress}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});

export default MoviesWheel;
