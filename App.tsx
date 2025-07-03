import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Button from './src/components/Button';
import Input from './src/components/Input';

import { COLORS, FONT_SIZES, PADDINGS } from './src/constants/themes';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');;
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddTask(){
    if(task.trim().length === 0) return;
    setTasks(prev => [...prev, task]);
    setTask('');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todo List</Text>

        <Input 
          iconLib={Feather}
          iconName='plus-circle'
          placeholder='Adicionar tarefa'
          value={task}
          onChangeText={setTask}
        />

        <FlatList 
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item })  => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />

        <Button onPress={handleAddTask} />


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
