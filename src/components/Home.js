import React from 'react';
import { StyleSheet, Text, Button, Image } from 'react-native';
import { KelvinToCelsius, KelvinToFahrenheit, fromTempToClothes, fromTempToAdjective, fromDescriptionToAdjective } from '../utils';
import { CLOTHES_IMAGES } from '../consts';

export default function Home({ location, weather: { tempInK, description }, likeTip }) {
  const tempInC = KelvinToCelsius(tempInK),
    tempInF = KelvinToFahrenheit(tempInK),
    clothes = fromTempToClothes(tempInC),
    tempAdjective = fromTempToAdjective(tempInC),
    descAdjective = fromDescriptionToAdjective[description];

  return (
    <>
      <Text style={styles.baseText}>
        {location} is {tempAdjective} and {descAdjective} with {tempInC}&deg;C / {tempInF}&deg;F
      </Text>
      <Text>{'\n'}</Text>
      <Text style={styles.titleText}>Clothing Tip: Wear a {clothes}!</Text>
      <Text>{'\n'}</Text>
      <Image source={CLOTHES_IMAGES[clothes]} />
      <Text>{'\n'}</Text>
      <Button title='I LIKE THIS TIP!' onPress={() => likeTip({ tempInC, tempInF, description, location, clothes })} />
    </>
  );
}

const styles = StyleSheet.create({
  home: {},
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 25,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
