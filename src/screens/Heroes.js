import React from 'react';
import {FlatList} from 'react-native';

import {featuredCharacters} from '../constants/Heroes';
import {HeroCard} from '../components';

const Heroes = () => {
  const renderCards = ({item}) => {
    return <HeroCard heroDetails={item} />;
  };

  return (
    <FlatList
      data={featuredCharacters}
      keyExtractor={(item, index) => `${item.name} - ${index}`}
      numColumns={2}
      renderItem={renderCards}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Heroes;
