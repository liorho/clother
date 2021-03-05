import * as Location from 'expo-location';

export const getLatLon = async () => {
  let { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    return { latLonErrorMsg: 'Permission to access location was denied' };
  }
  const {
    coords: { latitude: lat, longitude: lon },
  } = await Location.getCurrentPositionAsync({});
  return { lat, lon };
};
