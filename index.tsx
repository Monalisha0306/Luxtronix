import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Logo at the top */}
      <Image
        source={require('@/assets/images/logo.jpg')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Welcome to Luxtronix!
        </ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.buttonGroup}>
        <Button title="Login" onPress={() => router.push('/login')} color="#F4B400" />
        <Button title="Sign Up" onPress={() => router.push('/signup')} color="#F4B400" />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D4D4D', // Cool dark teal
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    color: '#F4B400', // Warm golden tone
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonGroup: {
    gap: 20,
  },
});
