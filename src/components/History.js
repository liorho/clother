import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import LikedTip from './LikedTip';

function NoLikes() {
  return (
    <View style={styles.noLikesView}>
      <Text style={styles.noLikesText}>NADA</Text>
    </View>
  );
}

export default function History({ history: { likes }, clearHistory }) {
  return (
    <>
      <Text style={styles.baseText}>CLOTHING TIPS HISTORY</Text>
      <Text>{'\n'}</Text>
      {likes.length ? likes.map((like, i) => <LikedTip key={i} like={like} index={i + 1} />) : <NoLikes />}
      <Text>{'\n'}</Text>
      {likes.length ? <Button title='CLEAR HISTORY' onPress={clearHistory} /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
  },
  noLikesView: {
    alignItems: 'center',
  },
  noLikesText: {
    fontSize: 70,
  },
});
