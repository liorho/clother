import React from 'react';
import { Home, History, Loading, Error } from '../containers';

export default function Main(props) {
  const { isLoading, errorMsg, isHome, location, weather, likeTip, history, clearHistory } = props;

  if (isLoading) return <Loading />;
  if (errorMsg) return <Error errorMsg={errorMsg} />;
  if (isHome) return <Home location={location} weather={weather} likeTip={likeTip} />;
  return <History history={history} clearHistory={clearHistory} />;
}
