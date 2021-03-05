import React from 'react';
import Home from './Home';
import History from './History';
import Loading from './Loading';
import Error from './Error';
// import { Home, History, Loading, Error } from '../components';

export default function Main(props) {
  const { isLoading, errorMsg, isHome, location, weather, likeTip, history, clearHistory } = props;

  if (isLoading) return <Loading />;
  if (errorMsg) return <Error errorMsg={errorMsg} />;
  if (isHome) return <Home location={location} weather={weather} likeTip={likeTip} />;
  return <History history={history} clearHistory={clearHistory} />;
}
