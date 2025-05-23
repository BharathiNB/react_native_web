/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? '#fff' : '#000',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? '#fff' : '#000',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <View style={{paddingRight: safePadding}}>
        <Text>Hello</Text>
      </View>
      <View
        style={{
          backgroundColor: isDarkMode ? '#000' : '#fff',
          paddingHorizontal: safePadding,
          paddingBottom: safePadding,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes"></Section>
        <Section title="Debug"></Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
