import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/LogoTccPng.png')}
        style={styles.logo}
      />
      {/* Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Como Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Trocas e Devoluções</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Perguntas Frequentes</Text>
        </TouchableOpacity>
      </View>

      {/* Imagem principal */}
      <Image
        source={require('./assets/Roupas.png')}
        style={styles.imgPrincipal}
      />

      {/* Lista */}
      <View style={styles.topicList}>
        <Text style={styles.topicItem}>Enviamos suas compras para todo o Brasil!</Text>
        <Text style={styles.topicItem}>Pague com PIX, TED ou CARTÃO DE CRÉDITO</Text>
        <Text style={styles.topicItem}>Compre com segurança. Seus dados sempre protegidos.</Text>
      </View>

      {/* Titulo */}

      <Text style={styles.titulo}>Destaques</Text>

      {/* Cards */}

      <View style={styles.card}>

        <Image
          source={require('./assets/selfie.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>roupa</Text>
          <Text style={styles.cardDescription}>Descrição da roupa e cores</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/selfie.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>roupa</Text>
          <Text style={styles.cardDescription}>Descrição da roupa e cores</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/selfie.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>roupa</Text>
          <Text style={styles.cardDescription}>Descrição da roupa e cores</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/selfie.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>roupa</Text>
          <Text style={styles.cardDescription}>Descrição da roupa e cores</Text>
        </View>
      </View>

      {/* Fim dos cards */}
      {/* Sempre se repetem */}

      {/* Titulo */}

      <Text style={styles.titulo}>Feedbacks</Text>

      <Image
        source={require('./assets/feedback.jpg')}
        style={styles.cardImageFeed}
      />

      <Image
        source={require('./assets/feedback.jpg')}
        style={styles.cardImageFeed}
      />

      <Image
        source={require('./assets/feedback.jpg')}
        style={styles.cardImageFeed}
      />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  menuText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
  },

  imgPrincipal: {
    width: 360,
    height: 195,
    resizeMode: 'contain',
  },

  /* estilo da lista */

  topicList: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicItem: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: '600',
  },

  /* titulo */

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 30,
  },

  /* estilo card */
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 360,
    height: 195,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
    backgroundColor: 'white',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
  },

  cardImageFeed: {
    width: 360,
    height: 495,
    resizeMode: 'cover',

    marginVertical: 20
  }
});
