import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Button from './src/components/Button';
import Input from './src/components/Input';

import { COLORS, PADDINGS } from './src/constants/themes';
import StatsCard from './src/components/StatsCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <StatsCard />

        <Input 
          iconLib={Feather}
          iconName='search'
          placeholder='Buscar...'
        />

        <Button />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:10,
    backgroundColor: COLORS.background,
    paddingHorizontal:PADDINGS.lg,
  },
});
