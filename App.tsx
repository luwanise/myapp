import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>GitHub Repository</Text>
      <Button title="Go to Repo" onPress={() => Linking.openURL('https://github.com/luwanise/myapp')} />
      <Text>HNG Hire Pages</Text>
      <Button title="HNG Hire Pages" onPress={() => Linking.openURL('https://hng.tech/hire/react-native-developers')} />
    </View>
  );
};

export default App;