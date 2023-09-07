import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import styles from './Style';
import Footer from './src/components/footer/Footer';
import Header from './src/components/header/Header';


export default function App() {

  const [ fontsLoaded ] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  })

  if(!fontsLoaded){
    <AppLoading/>
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Header />
      {/* Titulo */}

      <Text style={styles.titulo}>Destaques</Text>

      {/* Cards */}

      <View style={styles.card}>
        <TouchableOpacity>
          <Image
            source={require('./src/assets/selfie.jpg')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>roupa</Text>
          <Text style={styles.cardDescription}>Descrição da roupa e cores</Text>
        </View>
      </View>

      <View style={styles.card}>
      <TouchableOpacity>
          <Image
            source={require('./src/assets/selfie.jpg')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>roupa</Text>
          <Text style={styles.cardDescription}>Descrição da roupa e cores</Text>
        </View>
      </View>

      <View style={styles.card}>
      <TouchableOpacity>
          <Image
            source={require('./src/assets/selfie.jpg')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>roupa</Text>
          <Text style={styles.cardDescription}>Descrição da roupa e cores</Text>
        </View>
      </View>

      <View style={styles.card}>
      <TouchableOpacity>
          <Image
            source={require('./src/assets/selfie.jpg')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
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
        source={require('./src/assets/feedback.jpg')}
        style={styles.cardImageFeed}
      />

      <Image
        source={require('./src/assets/feedback.jpg')}
        style={styles.cardImageFeed}
      />

      <Image
        source={require('./src/assets/feedback.jpg')}
        style={styles.cardImageFeed}
      />

      <Footer />

    </ScrollView>
  );
}

