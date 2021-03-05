import React from 'react';
import { Text, Button, Image } from 'react-native';
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
      <Text>
        {location} is {tempAdjective} and {descAdjective} with {tempInC}&deg;C / {tempInF}&deg;F
      </Text>
      <Text>Clothing Tip: Wear a {clothes}!</Text>
      <Image source={CLOTHES_IMAGES[clothes]} />
      <Button title='I LIKE THIS TIP!' onPress={() => likeTip({ tempInC, tempInF, description, location, clothes })} />
    </>
  );
}
