import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import { Focus } from './features/Focus';
import { Timer } from './features/Timer';
import { colors } from './utils/colors';
import { FocusHistory } from './features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      ) : (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.maroon,
  },
});
