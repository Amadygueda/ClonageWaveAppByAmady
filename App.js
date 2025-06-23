import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Entete from './Composents/Entete';
import Solde from './Composents/Solde';
import Carte from './Composents/Carte';
import OptionsEtTransactions from './Composents/OptionsEtTransaction';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" />
      <Entete />
      <Solde />
      <Carte />
      <OptionsEtTransactions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B4DED',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});