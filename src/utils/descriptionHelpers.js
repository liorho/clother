export const fromTempToAdjective = (tempInC) => {
  switch (true) {
    case tempInC < 0:
      return 'freezing';
    case 0 <= tempInC && tempInC < 10:
      return 'cold';
    case 10 <= tempInC && tempInC < 20:
      return 'cool';
    case 20 <= tempInC && tempInC < 30:
      return 'warm';
    case 30 <= tempInC && tempInC < 40:
      return 'hot';
    case 40 <= tempInC:
      return 'very hot';
  }
};

export const fromDescriptionToAdjective = {
  Thunderstorm: 'stormy',
  Drizzle: 'drizzly',
  Rain: 'rainy',
  Snow: 'snowy',
  Mist: 'misty',
  Smoke: 'smoky',
  Haze: 'hazy',
  Dust: 'dusty',
  Fog: 'foggy',
  Sand: 'sandy',
  Ash: 'ashy',
  Squall: 'squally',
  Tornado: 'there is a TORNADO outside! RUN FOR YOUR LIFE!!!',
  Clear: 'clear',
  Clouds: 'cloudy',
};
