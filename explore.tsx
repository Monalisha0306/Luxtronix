import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#e0f2f1', dark: '#0a0f0f' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.jpg')} // place your Luxtronix logo here
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore Our Tech</ThemedText>
      </ThemedView>
      <ThemedText style={styles.introText}>
        Discover cutting-edge gadgets handpicked for you. Luxtronix brings you the latest in premium technology.
      </ThemedText>

      <Collapsible title="📱 Smartphones">
        <ThemedText>
          Explore the latest iPhones, Samsung Galaxy models, and other flagship smartphones with blazing speed and stunning cameras.
        </ThemedText>
      </Collapsible>

      <Collapsible title="💻 MacBooks & Laptops">
        <ThemedText>
          Get your hands on powerful MacBooks and sleek Windows laptops — perfect for creators, students, and professionals.
        </ThemedText>
      </Collapsible>

      <Collapsible title="⌚ Smart Accessories">
        <ThemedText>
          Discover Apple Watches, Galaxy Buds, AirPods, and more smart accessories to elevate your lifestyle.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🛒 Why Luxtronix?">
        <ThemedText>
          We curate only premium tech, offer smooth delivery, and provide exceptional after-sales service.
        </ThemedText>
        <ExternalLink href="https://luxtronix.tech/about">
          <ThemedText type="link">Learn more about us</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  introText: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
    fontSize: 16,
  },
});
