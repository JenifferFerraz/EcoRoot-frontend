import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, StatusBar, SafeAreaView, Pressable } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function CadastroGestor() {
  const router = useRouter();
  const [razaoSocial, setRazaoSocial] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmarSenha, setConfirmarSenha] = React.useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fffff" barStyle="dark-content" translucent={false} />
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

        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logoEcoRoot.png')}
            style={[styles.cloud, { width: width * 0.5, height: 55 }]}
            resizeMode="contain"
          />
        </View>


        <View style={styles.content}>
          <TextInput
            label="Razão Social"
            value={razaoSocial}
            onChangeText={text => setRazaoSocial(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={styles.outline}
            theme={{ colors: { primary: '#3A6351' } }}
          />
          <TextInput
            label="E-mail"
            value={email}
            onChangeText={text => setEmail(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={styles.outline}
            theme={{ colors: { primary: '#3A6351' } }}
          />
          <TextInput
            label="CNPJ/CPF"
            value={cnpj}
            onChangeText={text => setCnpj(text)}
            mode="outlined"
            keyboardType="numeric"
            style={styles.input}
            outlineStyle={styles.outline}
            theme={{ colors: { primary: '#3A6351' } }}
          />
          <TextInput
            label="Senha"
            value={senha}
            onChangeText={text => setSenha(text)}
            mode="outlined"
            secureTextEntry
            style={styles.input}
            outlineStyle={styles.outline}
            theme={{ colors: { primary: '#3A6351' } }}
          />
          <TextInput
            label="Confirmação de Senha"
            value={confirmarSenha}
            onChangeText={text => setConfirmarSenha(text)}
            mode="outlined"
            secureTextEntry
            style={styles.input}
            outlineStyle={styles.outline}
            theme={{ colors: { primary: '#3A6351' } }}
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </Pressable>
        </View>
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
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: '#5F939A',
    borderRadius: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  cloud: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 15,
    width: width > 400 ? 400 : '90%',
  },
  input: {
    marginBottom: 10,
  },
  outline: {
    borderRadius: 50,
    borderColor: '#3A6351',
  },
  button: {
    backgroundColor: '#3A6351',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
