import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './Style';

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
      {/* Logo */}
      <Image
        source={require('./src/assets/LogoTccPng.png')}
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
        source={require('./src/assets/Roupas.png')}
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

      <View style={styles.footerContainer}>

        <View style={styles.footerSection}>
          <Text style={styles.titleFooter}>Formas de pagamento</Text>
          <View>
            <Ionicons name="card" style={styles.icon}>
              <Text style={styles.textFooter}>Cartão</Text>
            </Ionicons>
            
            <Ionicons name="phone-portrait-outline" style={styles.icon}>
              <Text style={styles.textFooter}>PIX</Text>
            </Ionicons>

            <FontAwesome5 name="money-bill" style={styles.icon}>
              <Text style={styles.textFooter}>Dinheiro</Text>
            </FontAwesome5>
          </View>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.titleFooter}>Formas de envio</Text>
          <View>
            <FontAwesome5 name="box" style={styles.icon}>
              <Text style={styles.textFooter}>Correios</Text>
            </FontAwesome5>

            <FontAwesome5 name="shipping-fast" style={styles.icon}>
              <Text style={styles.textFooter}>Entrega Expressa</Text>
            </FontAwesome5> 

            <Ionicons name="ios-home-sharp" style={styles.icon}>
              <Text style={styles.textFooter}>Entregas Físicas</Text>
            </Ionicons>
          </View>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.titleFooter}>Contato</Text>
          <View>
            <FontAwesome5 name="phone-alt" style={styles.icon}>
              <Text style={styles.textFooter}>4002-8922</Text>
            </FontAwesome5>

            <FontAwesome5 name="phone-alt" style={styles.icon}>
              <Text style={styles.textFooter}>4002-8922</Text>
            </FontAwesome5>

            <FontAwesome5 name="envelope" style={styles.icon}>
              <Text style={styles.textFooter}>foreich@suporte.com</Text>
            </FontAwesome5>
          </View>
        </View>

        <Text style={styles.copy}>&copy; Todos os direitos reservados | Feito com ❤️ por ForEich LTDA</Text>
      </View>

    </ScrollView>
  );
}

