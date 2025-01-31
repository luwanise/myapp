import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>GitHub Repository</Text>
      <Button title="Go to Repo" onPress={() => Linking.openURL('YOUR_GITHUB_REPO_LINK')} />
      <Text>HNG Hire Pages</Text>
      <Button title="HNG Hire Pages" onPress={() => Linking.openURL('HNG_HIRE_LINK')} />
    </View>
  );
};

export default App;