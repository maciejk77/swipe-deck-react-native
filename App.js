import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/components/Deck';
import { DATA } from './data';

const App = () => {
  const renderCard = (item) => (
    <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
      <Text style={{ marginBottom: 10 }}>{item.text} text here</Text>
      <Button icon={{ name: 'code' }} backgroundColor="#03A9F4" title="View" />
    </Card>
  );

  const renderNoMoreCards = () => {
    return (
      <Card title="All done!">
        <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
        <Button backgroundColor="#03A9F4" title="Get more!" />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        onSwipeLeft={() => {}}
        onSwipeRight={() => {}}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
});

export default App;
