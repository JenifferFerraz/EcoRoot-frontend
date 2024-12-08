import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar, SafeAreaView, Pressable } from 'react-native';
import { IconButton, Card, Badge } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function NotificationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" translucent={false} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.push('/dashboard')} style={styles.backButtonContainer}>
            <IconButton
              icon="arrow-left"
              iconColor="#ffffff"
              size={24}
              style={styles.backButton}
            />
          </Pressable>

        </View>
        <Text style={styles.notificationText}>Notificação</Text>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Rota de Passagem do Caminhão</Text>
              <Badge style={styles.badge}>1</Badge>
            </View>
            <Text style={styles.cardContent}>O caminhão vai passar a 2 Km da sua localização!</Text>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#ffffff",
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,

    marginLeft: 16,
    zIndex: 1,
  },
  backButtonContainer: {
    marginRight: 10,
  },
  backButton: {
    backgroundColor: '#5F939A',
    borderRadius: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    width: width > 400 ? 400 : '90%',
    backgroundColor: '#f0f0f0',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#3A6351',
    color: '#fff',
  },
  cardContent: {
    marginTop: 10,
    fontSize: 14,
  },
});