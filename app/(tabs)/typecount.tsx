import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, StatusBar, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TypeCount() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#3A6351" barStyle="dark-content" translucent={false} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable onPress={() => router.push('/')}>
              <IconButton
                icon="arrow-left"
                iconColor="#ffffff"
                size={24}
                style={styles.backButton}
              />
            </Pressable>
          </View>
          <Image
            source={require('@/assets/images/VetorNuvem.png')}
            style={styles.cloud}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.question}>Qual tipo de conta você deseja criar?</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => router.push('/cadastrogestor')}>
              <Text style={styles.buttonText}>Sou gestor</Text>
              <Text style={styles.buttonDescription}>
                Crie um perfil com acesso às funcionalidades de gestor.
              </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => router.push('/cadastrocliente')}>
              <Text style={styles.buttonText}>Sou cidadão</Text>
              <Text style={styles.buttonDescription}>
                Crie um perfil com acesso às funcionalidades de cidadão.
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#3A6351",
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: '#5F939A',
    borderRadius: 50,
  },
  cloud: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: 320,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
    height: '47%',
    gap: 16,
  },
  button: {
    backgroundColor: '#F1F2F6',
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttonDescription: {
    fontSize: 14,
    color: '#000000',
    marginTop: 3,
    textAlign: 'center',
  },
});
