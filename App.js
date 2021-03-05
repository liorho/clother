import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getLatLon, getWeather } from './src/utils';
import { Main, Logo } from './src/containers';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isHome, setIsHome] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    const initApp = async () => {
      // get lat & lon
      const { lat, lon, latLonErrorMsg } = await getLatLon();
      if (latLonErrorMsg) {
        setErrorMsg(latLonErrorMsg);
        setIsLoading(false);
        return;
      }

      // get weather & location by lat & lon
      const { location, tempInK, description, weatherErrorMsg } = await getWeather(lat, lon);
      if (weatherErrorMsg) {
        setErrorMsg(weatherErrorMsg);
        setIsLoading(false);
        return;
      }
      setLocation(location);
      setWeather({ tempInK, description });

      // get history
      let history = await AsyncStorage.getItem('history');
      history = history != null ? JSON.parse(history) : { likes: [] };
      setHistory(history);

      setIsLoading(false);
    };

    initApp();
  }, []);

  const likeTip = async (tip) => {
    const time = new Date();
    let historyClone = { ...history };
    historyClone.likes.unshift({ ...tip, time });
    await AsyncStorage.setItem('history', JSON.stringify(historyClone));
    setHistory(historyClone);
  };

  const clearHistory = async () => {
    await AsyncStorage.setItem('history', JSON.stringify({ likes: [] }));
    setHistory({ likes: [] });
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>{'\n'}</Text>
      <View style={styles.main}>
        <Main
          isLoading={isLoading}
          errorMsg={errorMsg}
          isHome={isHome}
          location={location}
          weather={weather}
          likeTip={likeTip}
          history={history}
          clearHistory={clearHistory}></Main>
      </View>
      <TabButton isHome={isHome} setIsHome={setIsHome} />
      <StatusBar style='auto' />
    </View>
  );
}

function TabButton({ isHome, setIsHome }) {
  return (
    <TouchableHighlight style={styles.button} onPress={() => setIsHome(!isHome)} activeOpacity='0.8'>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{isHome ? 'HISTORY' : 'HOME'}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 30,
  },
  main: {
    alignItems: 'center',
    height: 480,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    width: 100,
  },
  buttonText: {
    fontSize: 17,
  },
});
