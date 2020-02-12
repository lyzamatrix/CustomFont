import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Text from './components/CustomText';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
      'Poppins-BlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
      'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
      'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-ExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
      'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
      'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
      'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
      'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
      'Poppins-ThinItalic': require('./assets/fonts/Poppins-ThinItalic.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text type="bold">Open up App.js to start working on your app!</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});