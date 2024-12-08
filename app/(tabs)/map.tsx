import * as React from 'react';
import { Link } from 'expo-router';

import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IconButton, Appbar } from 'react-native-paper';

export default function MapScreen() {
  const [isNegotiator, setIsNegotiator] = React.useState(false);
  return (
    <View style={styles.container}>
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
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.redDot} />
        <Text>Concentração de Usuários</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginRight: 5,
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