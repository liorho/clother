import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { fromTempToAdjective, fromDescriptionToAdjective, timeRefactor } from '../utils';

export default function History({ history: { likes }, clearHistory }) {
  return (
    <>
      <Text style={styles.baseText}>CLOTHING TIPS HISTORY</Text>

      {
        <>
          {likes.map(({ tempInC, tempInF, description, location, clothes, time }, i) => {
            time = timeRefactor(time);
            const tempAdjective = fromTempToAdjective(tempInC),
              descAdjective = fromDescriptionToAdjective[description];

            return (
              <Text key={i} style={styles.titleText}>
                {i + 1}. {time}: a {clothes} on a {tempAdjective} and {descAdjective} day
              </Text>
            );
          })}
        </>
      }
      <Button title='CLEAR HISTORY' onPress={clearHistory} />
    </>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 15,
  },
});
