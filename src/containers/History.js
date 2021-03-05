import React from 'react';
import { Text, Button } from 'react-native';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function History({ history: { likes }, clearHistory }) {
  return (
    <>
      <Text>HISTORY</Text>

      {
        <>
          <Text>You liked these tips:</Text>
          {likes.map(({ tempInC, tempInF, description, location, clothes, time }, i) => {
            {
              /* console.log(typeof time); */
            }
            time = new Date(time);
            time = time.toLocaleDateString('en-US', options);
            console.log(time);

            return (
              <Text key={i}>
                On {time} it looks like you liked our tip and wore a {clothes}
              </Text>
            );
          })}
        </>
      }
      <Button title='CLEAR HISTORY' onPress={clearHistory} />
    </>
  );
}
