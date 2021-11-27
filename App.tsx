import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store/configureStore';
import IntroText from './app/components/IntroText';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.content}>
          <IntroText />
          {/* <AddTaskForm onSubmit={handleAddTask} />
        {tasks.length === 0 ? (
          <IntroText />
        ) : (
          <TaskList
            tasks={tasks}
            onToggleTaskStatus={handleToggleTaskStatus}
            onDeleteTask={handleDeleteTask}
          />
        )} */}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    color: 'red',
  },
});

export default App;
