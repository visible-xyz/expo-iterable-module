import { StyleSheet, Text, View } from 'react-native';

import * as ExpoIterableModule from 'expo-iterable-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoIterableModule.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
