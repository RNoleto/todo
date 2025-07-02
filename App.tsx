import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Button from './src/components/Button';
import Input from './src/components/Input';

import { COLORS, FONT_SIZES, PADDINGS } from './src/constants/themes';
import StatsCard from './src/components/StatsCard';
import Card from './src/components/Card';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Titulo</Text>

        <StatsCard />

        <Input 
          iconLib={Feather}
          iconName='search'
          placeholder='Buscar...'
        />

        <View>
          <Card>
            <Text>
              Corpo da tela
            </Text>
          </Card>
        </View>

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
  title:{
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
  }
});
