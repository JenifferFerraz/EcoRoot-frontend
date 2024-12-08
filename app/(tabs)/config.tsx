import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar, SafeAreaView, Pressable } from 'react-native';
import { IconButton, Card, Switch } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function ConfigScreen() {
  const router = useRouter();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
          <Pressable onPress={() => router.push('/dashboard')} style={styles.backButtonContainer}>
            <IconButton
              icon="exit-to-app"
              iconColor="#ffffff"
              size={24}
              style={styles.backButton}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.notificationText}>Configurações</Text>
        </View>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.infoText}>Usuário: John Doe</Text>
            <Text style={styles.infoText}>Telefone: (123) 456-7890</Text>
            <Text style={styles.infoText}>Email: johndoe@example.com</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Alterar Senha</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardTitle}>Notificações</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#3A6351" />
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
    justifyContent: 'space-between',
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
  card: {
    width: width > 400 ? 400 : '90%',
    backgroundColor: '#f0f0f0',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 10,
  },
});