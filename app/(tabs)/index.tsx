import { Link } from 'expo-router';
import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, StatusBar, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#3A6351" barStyle="dark-content" translucent={false} />
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/VetorNuvem.png')}
          style={styles.cloud}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            mode="outlined"
            style={[styles.input]}
            outlineStyle={styles.outline}
            theme={{ colors: { primary: '#3A6351' } }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            mode="outlined"
            secureTextEntry
            style={[styles.input]}
            right={<TextInput.Icon icon="eye" />}
            outlineStyle={styles.outline}
            theme={{ colors: { primary: '#3A6351' } }}
          />
          <View style={styles.buttonContainer}>
            <Link href={'/dashboard'}>
              <Button
                mode="contained"
                style={[styles.button]}
                theme={{ colors: { primary: '#3A6351' } }}
              >
                Login
              </Button>
            </Link>
            <Link href={'/typecount'}>
              <Button
                mode="outlined"
                style={[styles.button2]}
                theme={{ colors: { primary: '#3A6351' } }}
              >
                Criar minha conta
              </Button>
            </Link>
          </View>
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
    height: 320,
  },
  content: {
    marginTop: 220,
    width: width > 400 ? 400 : '90%',
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 16,
    marginTop: 16,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  button2: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    color: '#3A6351',
    marginTop: 16,
  },
  outline: {
    borderRadius: 50,
    borderColor: '#3A6351',
  },
});