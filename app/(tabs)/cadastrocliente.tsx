import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, StatusBar, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function CadastroCliente() {
  const router = useRouter();
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmarSenha, setConfirmarSenha] = React.useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fffff" barStyle="dark-content" translucent={false} />

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

          <View style={styles.logoContainer}>
            <Image
              source={require('@/assets/images/logoEcoRoot.png')}
              style={[styles.cloud, { width: width * 0.5, height: 55 }]}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.content}>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={text => setNome(text)}
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

          {/* Dois inputs na mesma linha */}
          <View style={styles.row}>
            <TextInput
              label="CPF"
              value={cpf}
              onChangeText={text => setCpf(text)}
              mode="outlined"
              keyboardType="numeric"
              style={[styles.input, styles.inputHalf]}
              outlineStyle={styles.outline}
              theme={{ colors: { primary: '#3A6351' } }}
            />
            <TextInput
              label="CEP"
              value={cep}
              onChangeText={text => setCep(text)}
              mode="outlined"
              keyboardType="numeric"
              style={[styles.input, styles.inputHalf]}
              outlineStyle={styles.outline}
              theme={{ colors: { primary: '#3A6351' } }}
            />
          </View>

          <TextInput
            label="Endereço"
            value={endereco}
            onChangeText={text => setEndereco(text)}
            mode="outlined"
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

      </ScrollView>

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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
  },
  inputHalf: {
    flex: 1,
    marginRight: 8,
  },
  outline: {
    borderRadius: 50,
    borderColor: '#3A6351',
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'flex-start',
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
    width: width > 400 ? 400 : '90%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  button: {
    backgroundColor: '#3A6351',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
