import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const App = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Add Tracking event"
        onPress={async () =>
          await analytics().logEvent('generalEvent', {
            item: 'It works!',
          })
        }
      />
    </View>
  );
};

export default App;
