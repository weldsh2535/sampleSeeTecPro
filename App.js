import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, Button, View, Image } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState(null)

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Enter user name" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword}  secureTextEntry placeholder="Enter password" />
        <Button
          style={styles.button}
          title="Sign in"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    margin: 12,
    padding: 10,
    borderRadius:10,
    width:20,
  },
  logo: {
    flex: 1,
    justifyContent: "center"
  },
  view: {
    margin: 10,
    padding: 10
  },
  body: {
    backgroundColor: '#ffffff',
  },
});
export default App;
