import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar, SafeAreaView, Pressable } from 'react-native';
import { IconButton, Card, Badge, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function RelatoriosDescarte() {
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
        <Text style={styles.notificationText}>Relatórios de Descarte</Text>
        <TextInput
          label="Filtrar por Período"
          mode="outlined"
          style={styles.input}
        />
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Peso Total Aproximado</Text>
            <Text style={styles.cardContent}>Quantidade de Coletas: 20</Text>
            <Text style={styles.exportText}>Exportar Formato:</Text>
            <View style={styles.buttonContainer}>
              <Button mode="contained" style={styles.exportButton} theme={{ colors: { primary: '#3A6351' } }}
                onPress={() => { /* Add PDF export logic here */ }}>
                PDF
              </Button>
              <Button mode="contained" style={styles.exportButton} theme={{ colors: { primary: '#3A6351' } }}
                onPress={() => { /* Add CSV export logic here */ }}>
                CSV
              </Button>
            </View>
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
  },
  backButtonContainer: {
    marginRight: 10,
  },
  backButton: {
    backgroundColor: '#5F939A',
    borderRadius: 50,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    width: width > 400 ? 400 : '90%',
    marginTop: 20,
    borderRadius: 10,
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
  cardContent: {
    marginTop: 10,
    fontSize: 14,
  },
  exportText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  exportButton: {
    marginHorizontal: 5,
  },
});