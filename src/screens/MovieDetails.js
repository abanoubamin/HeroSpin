import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {getMovieDetails} from '../services';
import {colors, commonStyles} from '../theme';

const MovieDetails = () => {
  const {
    params: {heroName, movieID},
  } = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});
  const {Poster, Title, Plot, Year, Actors, imdbRating} = movieDetails ?? {};
  const labels = [
    {label: 'Year', description: Year},
    {label: 'Actors', description: Actors},
    {label: 'IMDB Rating', description: imdbRating},
  ];

  useEffect(() => {
    async function fetchData() {
      const response = await getMovieDetails(movieID);
      setMovieDetails(response);
      setLoading(false);
    }

    fetchData();
  }, [movieID]);

  return (
    <ScrollView style={commonStyles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.detailsContainer}>
          <FastImage
            style={styles.poster}
            source={{uri: Poster, priority: FastImage.priority.high}}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.title}>{Title}</Text>
          <Text style={styles.plot}>{Plot}</Text>
          {labels.map(item => (
            <View key={item.label} style={styles.labelContainer}>
              <Text
                style={[
                  styles.label,
                  styles.boldedText,
                ]}>{`${item.label}: `}</Text>
              <Text style={styles.label}>{item.description}</Text>
            </View>
          ))}
          <View style={commonStyles.cta}>
            <Button
              title="Another Movie"
              onPress={() => navigation.replace('MoviesWheel', {heroName})}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {padding: 10},
  poster: {alignSelf: 'center', height: 350, width: 250},
  title: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 10,
    textAlign: 'center',
  },
  plot: {color: colors.black, fontSize: 14, marginBottom: 10},
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {color: colors.black, fontSize: 16},
  boldedText: {fontWeight: 'bold'},
});

export default MovieDetails;
