import { Link, useRouter } from 'expo-router';
import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, StatusBar, SafeAreaView, Pressable, Text } from 'react-native';
import { TextInput, IconButton, Card, Badge, Appbar } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

export default function DashBoard() {
  const router = useRouter();
  const [userName, setUserName] = React.useState("User");
  const [isNegotiator, setIsNegotiator] = React.useState(false);

  React.useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('@/assents/mocks/user.json');
      const data = await response.json();
      setUserName(data.name);
      setIsNegotiator(data.isNegotiator);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#3A6351" barStyle="dark-content" translucent={false} />
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/metadedalogo.png')}
          style={styles.cloud}
          resizeMode="cover"
        />
        <View style={styles.header}>
          <View style={styles.userContainer}>
            <Pressable onPress={() => router.push('/')}>
              <IconButton
                icon="account"
                iconColor="#000000"
                size={30}
                style={styles.backButton}
              />
            </Pressable>
            <Text style={styles.greeting}>Olá, {userName}</Text>
          </View>
          <View style={styles.notificationContainer}>
            <Pressable onPress={() => router.push('/notification')}>
              <IconButton
                icon="bell"
                iconColor="#000000"
                size={28}
                style={styles.notificationButton}
              />
              <Badge style={styles.badge}>3</Badge>
            </Pressable>
          </View>
        </View>
        <TextInput
          placeholder="Pesquisar"
          style={styles.searchInput}
          mode="outlined"
          outlineStyle={styles.outline}
        />
        <View style={styles.cardContainer}>
          <Card style={styles.card} onPress={() => router.push('/novodescarte')}>
            <Card.Content style={styles.cardContent}>
              <IconButton icon="plus" iconColor="#ffffff" size={24} style={styles.Icons} />
              <Text style={styles.cardText}>Registrar Novo Descarte</Text>
            </Card.Content>
          </Card>
          <Link href="/relatoriosdescarte">
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <IconButton icon="file-document" size={24} iconColor="#ffffff" style={styles.Icons} />
                <Text style={styles.cardText}>Histórico de Descarte</Text>
              </Card.Content>
            </Card>
          </Link>
          <Text style={styles.mapPrompt}>Verifique o ponto de coleta mais próximo:</Text>
          <Card style={styles.mapCard} onPress={() => router.push('/map')}>
            <Card.Content style={styles.cardContent}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  title="Ponto de Coleta"
                  description="Descrição do ponto de coleta"
                />
                <Marker
                  coordinate={{ latitude: 37.78925, longitude: -122.4334 }}
                  title="Ponto de Coleta 2"
                  description="Descrição do ponto de coleta 2"
                />
                <Marker
                  coordinate={{ latitude: 37.79025, longitude: -122.4344 }}
                  title="Ponto de Coleta 3"
                  description="Descrição do ponto de coleta 3"
                />
                <Marker
                  coordinate={{ latitude: 37.79125, longitude: -122.4354 }}
                  title="Ponto de Coleta 4"
                  description="Descrição do ponto de coleta 4"
                />
                <Marker
                  coordinate={{ latitude: 37.79225, longitude: -122.4364 }}
                  title="Ponto de Coleta 5"
                  description="Descrição do ponto de coleta 5"
                />
              </MapView>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.navbarContainer}>
          <Appbar style={styles.appBar}>
            <TouchableOpacity style={styles.link}>
              <Link href="/dashboard" style={styles.linkText}>
                <IconButton icon="home" iconColor="#ffffff" size={24} />
              </Link>
            </TouchableOpacity>
            {!isNegotiator && (
              <TouchableOpacity style={styles.link}>
                <Link href="/novodescarte" style={styles.linkText}>
                  <IconButton icon="plus" iconColor="#ffffff" size={24} />
                </Link>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.link}>
              <Link href="/config" style={styles.linkText}>
                <IconButton icon="cog" iconColor="#ffffff" size={24} />
              </Link>
            </TouchableOpacity>
          </Appbar>
        </View>
      </View>
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
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  cloud: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: 130,
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: '#ffff',
    borderRadius: 50,
    borderColor: '#000000',
    borderWidth: 2,
  },
  greeting: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000000',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    backgroundColor: '#ffff',
    borderRadius: 50,
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
  },
  Icons: {
    backgroundColor: '#3A6351',
    borderRadius: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    marginBottom: 10,
    height: 40,
    marginTop: 80,
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 3,
    width: '90%',
  },
  card: {
    marginBottom: 16,
    padding: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: width > 400 ? 400 : '90%',
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 10,
    fontSize: 16,
  },
  outline: {
    borderRadius: 50,
    borderColor: '#3A6351',
  },
  mapPrompt: {
    marginTop: 20,
    fontSize: 16,
    color: '#000000',
  },
  mapCard: {
    marginTop: 10,
    padding: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  map: {
    width: '100%',
    height: 150,
  },
  navbarContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  appBar: {
    backgroundColor: '#5F939A',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    textDecorationLine: 'none',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  paper: {
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});