import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar, SafeAreaView, Pressable } from 'react-native';
import { IconButton, TextInput, Button, Checkbox } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function NovoDescarte() {
  const router = useRouter();
  type CheckedItems = {
    Metal: boolean;
    Vidro: boolean;
    Papel: boolean;
    Plástico: boolean;
    'Lixo Orgânico': boolean;
    'Lixo Eletrônico': boolean;
  };

  const [checkedItems, setCheckedItems] = React.useState<CheckedItems>({
    Metal: false,
    Vidro: false,
    Papel: false,
    Plástico: false,
    'Lixo Orgânico': false,
    'Lixo Eletrônico': false,
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleCheckboxChange = (item: keyof CheckedItems) => {
    setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNewDiscard = () => {
    setCheckedItems({
      Metal: false,
      Vidro: false,
      Papel: false,
      Plástico: false,
      'Lixo Orgânico': false,
      'Lixo Eletrônico': false,
    });
    setIsSubmitted(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" translucent={false} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.push('/dashboard')} style={styles.backButtonContainer}>
            <IconButton icon="arrow-left" iconColor="#ffffff" size={24} style={styles.backButton} />
          </Pressable>
          <Text style={styles.headerText}>Novo Descarte</Text>
        </View>
        {isSubmitted ? (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>Descarte Registrado com Sucesso</Text>
            <Text style={styles.successIcon}>✔️</Text>
            <Button mode="contained" style={styles.successButton} onPress={() => router.push('/dashboard')}>
              Voltar à Tela Principal
            </Button>
            <Button mode="contained" style={styles.successButton} onPress={handleNewDiscard}>
              Registrar um Novo Descarte
            </Button>
            <Button mode="contained" style={styles.successButton} onPress={() => router.push('/relatoriosdescarte')}>
              Verificar Meus Descartes
            </Button>
          </View>
        ) : (
          <>
            <Text style={styles.label}>Categoria de Lixo:</Text>
            <View style={styles.checkboxContainer}>
              {Object.keys(checkedItems).map((item) => (
                <View key={item} style={styles.checkbox}>
                  <Checkbox
                    status={checkedItems[item as keyof CheckedItems] ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxChange(item as keyof CheckedItems)}
                    color="#3A6351"
                  />
                  <Text>{item}</Text>
                </View>
              ))}
            </View>
            <TextInput
              label="Peso Total Aproximado"
              mode="outlined"
              style={styles.input}
              outlineStyle={styles.outline}
              theme={{ colors: { primary: '#3A6351' } }}
            />
            <TextInput
              label="Volume Aproximado"
              mode="outlined"
              style={styles.input}
              outlineStyle={styles.outline}
              theme={{ colors: { primary: '#3A6351' } }}
            />
            <TextInput
              label="Endereço da Coleta"
              mode="outlined"
              style={styles.input}
              outlineStyle={styles.outline}
              theme={{ colors: { primary: '#3A6351' } }}
            />
            <Button mode="contained" style={styles.registerButton} theme={{ colors: { primary: '#3A6351' } }} onPress={handleSubmit}>
              Registrar Descarte
            </Button>
          </>
        )}
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
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  input: {
    width: width > 400 ? 400 : '90%',
    marginTop: 20,
    borderRadius: 10,
  },
  outline: {
    borderColor: '#3A6351',
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#3A6351',
  },
  successContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A6351',
  },
  successIcon: {
    fontSize: 50,
    color: '#3A6351',
    marginVertical: 20,
  },
  successButton: {
    marginTop: 10,
    backgroundColor: '#3A6351',
  },
});